import './App.css';
import Address from "../Product/Address";
import Wallet from "../Product/Wallet";
import Transactions from "../Product/Transactions";
import Transfer from "../Product/Transfer";
import {useState,useEffect,useRef} from 'react';
import {BrowserRouter,Route,Link, Routes, Outlet} from "react-router-dom";




function App() {
  //---------------- The state of this app ----------------
  const [addr,setAddr]=useState([]);
  const [List,setList]=useState([]);
  const [User,setUser]=useState({
    Address:"",
    Balance: 0
  });

//----------- useRef to avoid the infinit loop to do fetch when the List changed----------------------------
const Todo = useRef(true)
const OneTime=useRef(true)


  useEffect(() => {
    if(OneTime.current){
      fetch("http://localhost:3001/account/addresses")
      .then((response)=>response.json())
      .then((data)=>{
      //  console.log(data);
       setAddr(addr=>addr=data.address);
      })

      OneTime.current=false
    }
     
},[])


//----------------------- fetch data when a new transaction add into DB -------------------
useEffect(() => {
  if(Todo.current){
    fetch("http://localhost:3001/account/balance")
    .then((response)=>response.json())
    .then((data)=>{
    //  console.log(data);
    setUser({
         Address:data.address,
         Balance:data.balance
         });
    }) 
    
    fetch("http://localhost:3001/transaction/history")
    .then((response)=>response.json())
    .then((data)=>{
    //  console.log(data);
     setList(List=>List=data.list);
    })
    Todo.current=false
  } 
},[List])







  function handleList(input,balance){
    console.log(input)
    setList((pre)=>{
      return([...pre,input])
    })
    setUser({
      Address:"0x1917C75397722718AcFAc76C2CbF5FD6717c14dF",
      Balance:balance
    });
  }

  
  return (
    <BrowserRouter>
      <div>
        <div className='nav'>
          <Link to="/transaction">Transactions</Link> |
          <Link to="/address">Address</Link> |
          <Link to="/wallet">Wallet</Link>

        </div>
 

         <Routes>
          <Route path="/"  Component={Outlet} exact/>
          <Route path="/address" element={<Address Addresses={addr} />}  exact/>
          <Route path="/transaction" element={<Transactions list={List}/>} />
          <Route path="/wallet" element={<Wallet user={User} />} />
          <Route path="/address/:id"  element={<Transfer Todo={Todo} user={User} updateList={handleList} />}
          />
         </Routes>
       
    </div>
    </BrowserRouter>
    

  )
}

export default App;