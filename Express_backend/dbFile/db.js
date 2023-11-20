// db.js
const mongoose = require('mongoose');
const utils = require('./utils.js');
const connection = require('./connection.json');

const dbUrl = utils.connectionString(connection);

const db = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const Transaction = new mongoose.Schema({
    source: {
        type: String,
        immutable: true,
        sparse: true,
        trim: true,
        required: [true, "Source address does not exist"],
        validate: {
            validator: utils.isAddressValid,
            message: 'Non-existent source address'
        }
    },
    destination: {
        type: String,
        immutable: true,
        sparse: true,
        trim: true,
        required: [true, "Destination address does not exist"],
        validate: {
            validator: utils.isAddressValid,
            message: 'Non-existent destination address'
        }
    },
    amount: {
        type: Number,
        immutable: true,
        sparse: true,
        trim: true,
        min: 1,
        required: [true, "Valid amount does not exist"]
    },
    status: {
        type: String,
        immutable: true,
        sparse: true,
        trim: true,
        required: [true, "Valid status does not exist"],
        validate: {
            validator: utils.isStatusValid,
            message: 'Invalid status'
        }
    },
    gasUsed: {
        type: String,
        immutable: true,
        sparse: true,
        trim: true,
        default: "21000"
    },
    receiptHash: {
        type: String,
        unique: true,
        immutable: true,
        sparse: true,
        trim: true,
        default: utils.hash
    },
    timeStamp: {
        type: String,
        immutable: true,
        required: [true, "Valid timestamp does not exist"]
    }
});

module.exports = db.model('Transactions', Transaction);
