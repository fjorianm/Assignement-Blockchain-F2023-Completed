let addresses=[
    {
        address : "0x1917C75397722718AcFAc76C2CbF5FD6717c14dF",
        balance: 25000
    },
    {
        address : "0x8a44A825cb3c7185a58b3C67ff249623E319Fa20",
        balance: 25000
    },
    {
        address : "0xb5f3b2444855910775Afec96Cd72c3c917C77927",
        balance: 25000
    },
    {
        address : "0xDca7CbBB1EaF4AD2C3bf1AfFd8AA06386dE420Df",
        balance: 25000
    }
]
  




function getAddresses() {

    const addr=[]
    addresses.map((account,index)=>{
    addr.push(account.address)
   })


    return addr;
}

function getBalance(a){
    const key=Object.keys(addresses).find(account=>addresses[account].address===a)
    // console.log(addresses[key].balance)
    return addresses[key]
}

function setBalance(a,b){
    const key=Object.keys(addresses).find(account=>addresses[account].address===a)
    addresses[key].balance=b
    // console.log(addresses[key])
    return addresses[key]
}

module.exports={
    getAddresses: getAddresses,
    getBalance: getBalance,
    setBalance: setBalance
}
