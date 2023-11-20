// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const accountRouter = require('./routes/accounts');
const transactionRouter = require('./routes/transaction');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, mytoken');
    next();
});

app.use('/account', accountRouter);
app.use('/transaction', transactionRouter);

app.listen(port, () => {
    console.log("Listen to the Port: " + port);
});
