const express = require('express');
const logger = require('morgan');
const dotenv = require("dotenv");
const app = express();

const chatRoute = require('./routes/chat');

dotenv.config();

app.use(logger('dev'));
app.use(express.json());

app.listen(process.env.PORT || process.env.PORT_NO, () => {
    console.log('Backend running at: ', process.env.PORT_NO);
});

app.get('/', (req, res) => {
    console.log('test is successfull');
    res.send('Connected!');
});

app.use('/chat', chatRoute);

module.exports = app;
