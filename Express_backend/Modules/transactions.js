const  query = require("../dbFile/query")



//create a mongoose connect to retrieve and return all of the 
//transaction history documents.
async function getTransactionHistory(){
    try{
        var trans=await query.getAll();
        // console.log(trans)
        return trans
    }catch(err){
        return err
    }
}


async function postTransaction(source,destination,amount,status,timeStamp){
    try{
        var trans=await query.Insert(source,destination,amount,status,timeStamp);
        // console.log(trans)
        return trans
    }catch(err){
        return err
    }
}

module.exports={
    getTransactionHistory:getTransactionHistory,
    postTransaction: postTransaction
}

