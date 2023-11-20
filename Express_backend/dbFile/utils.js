//use this file to form the collection structure and connect with that.
//You also can use this separate file to store utility functions.

'use strict'
const addresses=require('../Modules/accounts')
const web3=require('web3')
const uuid=require('node-uuid')
const moment =require('moment')

//-------------------  Get the DB connection URL -------------------------------------
exports.connectionString=function(obj){
    return `mongodb+srv://${obj.username}:${obj.password}@${obj.url}/${obj.dbname}`
}

//-------------------- Return all Addresses ------------------------------------------
var addr=addresses.getAddresses()




//------------------------validators-----------------------------------------

exports.isAddressValid=function(source){
    return Boolean(addr.includes(source))
}

exports.isStatusValid=function(status){
    return Boolean(status==="Success")
}



//---------------------------- generate the Hash to each transaction ------------------------
exports.hash=function(v){
    return web3.utils.sha3(uuid.v1())
}


//----------------------------- format the timestamp -----------------------------------------
exports.format=function(v){
    return moment(v).format('YYYY-MM-DDTHH:mm:ss')
}