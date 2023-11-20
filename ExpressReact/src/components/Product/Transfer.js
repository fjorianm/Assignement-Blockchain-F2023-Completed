import { useState,useEffect} from "react"
import { useParams } from "react-router-dom"

import Receipt from './Receipt';
import './Transfer.css';
import moment from "moment";


const Transfer=(props)=>{
    const [receipt,setReceipt]=useState({});
    const [input,setInput]=useState("")

    const {Address,Balance}=props.user;
    const {id}=useParams();
    const {updateList}=props
    const {Todo}=props

//when the receipt update, if the receipt is not {""} null(transfer action successful), the receipt will insert to the List at App.js.
// else receipt is null (transfer action unsuccessful). 
    useEffect(() => {
        if(Object.keys(receipt).length !== 0){
            updateList(receipt,Balance-parseFloat(input))
            setInput(
                input=>input=""
            )
        }
    },[receipt])


// This function is used to post the data to DB
    // function handleInsert(Address,id,valueOfA,status){
        

    // }

// when the submit buttton is pressed: if balance is enough, updata receipt with content. Otherwise, updata the receipt with non content.
    function handleSumbit(e){
        e.preventDefault();
        const a=input;
        let valueOfA=parseFloat(a);
        let newBalance=Balance-valueOfA;
        let time=moment().format('YYYY-MM-DD T HH:mm:ss.sss');
        console.log(time)

        if(Balance>valueOfA){    
             setReceipt({   
                status:"SUCCESS",
                timeStamp:time,                
                receiptHash: "0xdfbc75b254db76ade94581ce4463dec284865148cce297cf512227d9e9e10fd2",
                BlockHash:"0xcf6a288e5647c48c4ed82c821c1d5ac6da125c42a72b2aacb12d4b54e47c5bf8",
                BlockNumber:3,
                source:Address,
                destination: id,
                gasUsed: 21000,  
                amount: valueOfA     
            })
            //when the receipt is successful, that means a transaction need to be added into Mongo DB. Therefore, 
            // insert to db and get the data from db is necessarliy. 'TOdo' is used to determine do the get fetch 
            // function or not.


            // post the update balance to the account
            fetch('http://localhost:3001/account/balance', {
                method: 'post',
                body: JSON.stringify({
                    balance: newBalance
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
                .then(function (data) {
                  return data.text();
                }).then(function (data) {
                  console.log(data)
                });

            // post the receipt to DB
            fetch('http://localhost:3001/transaction/post', {
                method: 'post',
                body: JSON.stringify({
                    status: "Success",
                    source:Address,
                    destination: id,
                    amount: valueOfA ,
                    timeStamp:time

                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
                .then(function (data) {
                  return data.text();
                }).then(function (data) {
                  console.log(data)
                });

            Todo.current=true
         }
        else{
             setReceipt({})
         }

    }

    const handleInputChange=(e)=>{
        const input= e.target.value.replace(/\D/g, '');
        setInput(input);
        

    }

    const FormType=()=>{
        return(
            <form onSubmit={handleSumbit} className="wrapper">
                <p>From: {Address} </p>
                <p>To: {id} </p>
                <label><span>Amount: </span> <input value={input} onChange={handleInputChange} /></label>
                <p><button type="submit">Submit</button></p>

            </form>
        )

    }


    return(
        
        <div>
            <h1>Transfer</h1>
                {FormType()}
            <Receipt receipt={receipt}/>
        </div>
    )
}

export default Transfer