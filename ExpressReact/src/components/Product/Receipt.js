import React, {Component} from 'react';
import "./Receipt.css";

export default class Transfer extends Component{

    constructor(props){
        super(props);
        this.bool=false;

    }




    render(){
        const{amount,receiptHash,BlockHash,BlockNumber,source,destination,gasUsed}=this.props.receipt;

        if(Object.keys(this.props.receipt).length === 0 ||amount === ""){
            return <div></div>
        }else{
            return(
                <div className='page'>
                    <h1 className='title'>Receipt</h1>
                    <br/>
                    <p><b>Transaction Hash:</b>    {receiptHash}</p>
                    <p><b>Block Hash:</b>    {BlockHash}</p>
                    <p><b>Block Number:</b>    {BlockNumber}</p>
                    <p><b>From:</b>    {source}</p>
                    <p><b>To:</b>    {destination}</p>
                    <p><b>Gas Used:</b>    {gasUsed}</p>
                   
                </div>
            )
        }
       

    }
}