const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', require('./routes/downloader'));


app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`);
})
module.exports = app;
