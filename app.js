const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/downloader'));


// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname + '/views/index.html'));
// })
// app.get('/download', (req,res) => {
//     var URL = req.query.URL;
//     res.header('Content-Disposition', 'attachment; filename="video.mp4"');
//     ytdl(URL, {
//         format: 'mp4'
//         }).pipe(res);
//     });


app.listen(3000)
module.exports = app;
