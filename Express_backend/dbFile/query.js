// query.js
const TransactionModel = require('./db');

async function Insert(source, destination, amount, status, timeStamp) {
    try {
        const user = await TransactionModel.create({ source, destination, amount, status, timeStamp });
        return user;
    } catch (err) {
        console.log(err);
        return err;
    }
}

async function getAll() {
    try {
        const user = await TransactionModel.find();
        return user;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    getAll: getAll,
    Insert: Insert
};
