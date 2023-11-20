
const Wallet=(props)=>{

  return(
      <div>
          <h1>My Wallet</h1>
          <div className="wrapper">
              <p><b>Address:</b> {props.user.Address} </p>
              <p><b>Balance:</b> {props.user.Balance} </p>
          </div>
          
      </div>
  )
}

export default Wallet