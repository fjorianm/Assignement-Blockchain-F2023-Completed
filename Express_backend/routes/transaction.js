// routes/transaction.js
const express = require('express');
const transaction = require('../Modules/transactions');

const router = express.Router();

router.get('/history', async (req, res) => {
    try {
        const List = await transaction.getTransactionHistory();
        res.json({ list: List });
    } catch (err) {
        res.json({ err: err });
    }
});

router.post('/post', async (req, res) => {
    try {
        const obj = await transaction.postTransaction(req.body.source, req.body.destination, req.body.amount, req.body.status, req.body.timeStamp);
        res.json({ obj: obj });
    } catch (err) {
        res.json({ err: err });
    }
});

module.exports = router;
