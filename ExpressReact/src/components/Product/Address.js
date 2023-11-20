import {Link} from "react-router-dom";
import "./Address.css"

const Address=(props)=>{
    const show=()=>{
        return props.Addresses.map((item)=>{
            return (
                <div key={item} className="address">
                  <Link to={`/address/${item}`} >{item}</Link>
                </div>
                
            )
        })
    }

    return(
        <div>
            <h1>Blockchain Node Addresses</h1>
            <div className="container">
            {show()}
            </div>
        </div>

    )

    



}



export default Address;