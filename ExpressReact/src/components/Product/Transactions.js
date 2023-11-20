import "./Transaction.css";

const Transactions=(props)=>{
    const show=()=>{
        return(props.list.map((item,index)=>{
            return(
                <div key={index} className="Transaction">
                    <p><b>Transaction Hash:</b> {item.receiptHash}</p>
                    <p><b>Status:</b> {item.status}</p>
                    <p><b>Timestamp:</b> {item.timeStamp}</p>
                    <p><b>From:</b> {item.source} </p>
                    <p><b>To: </b>{item.destination} </p>
                    <p><b>Value: </b>{item.amount} ETH </p>
                    <p><b>Gas Used: </b>{item.gasUsed} </p>
    
                </div>

            )
        }))
    }
    
   return (
    <div>
        <h1>Transaction History</h1>
        {show()}
    </div>
   )
    
   
}

export default Transactions