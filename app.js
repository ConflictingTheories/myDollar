var express = require('express');
var http = require('http');
var morgan = require('morgan');
var compression = require('compression');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon')

var version = "0.1.0";

// Main App
var app = express();

// View Engine
app.set('view engine', 'ejs');

// Logging
app.use(morgan('tiny'));

// favicon
//app.use(favicon(__dirname + '/assets/favicon.ico'));

// gzip/deflate outgoing responses
app.use(compression());

// store session state in browser cookie
app.use(cookieSession({
    keys: ['myD0llar1', 'myD0llar2']
}));

// parse urlencoded request bodies into req.body
app.use(bodyParser.urlencoded({
    extended: false
}));

// TODO
app.use('/', (req, res) => {
    res.render('index',{
        myDollarVersion: version,
        page: "index"
    });
});

// TODO
app.use('/dashboard', (req, res) => {
    res.render('dashboard');
});

// TODO
app.use('/logout', (req, res) => {
    res.render('logout');
});

// TODO
app.use('/login', (req, res) => {
    res.render('login');
});

// TODO
app.use((req, res) => {
    res.render('x40x');
});

// TODO
app.use((req, res) => {
    res.render('x50x');
});


//create node.js http server and listen on port
http.createServer(app).listen(3000);