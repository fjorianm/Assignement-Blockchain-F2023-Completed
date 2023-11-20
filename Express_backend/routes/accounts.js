// routes/accounts.js
const express = require('express');
const router = express.Router();
const Account = require('../Modules/accounts');

router.get('/addresses', (req, res) => {
    const addr = Account.getAddresses();
    res.json({ address: addr });
});

router.get('/balance', (req, res) => {
    const source = Account.getBalance("0x1917C75397722718AcFAc76C2CbF5FD6717c14dF");
    res.json({ address: source.address, balance: source.balance });
});

router.post('/balance', (req, res) => {
    const source = Account.setBalance("0x1917C75397722718AcFAc76C2CbF5FD6717c14dF", req.body.balance);
    res.json({ address: source.address, balance: source.balance });
});

module.exports = router;
