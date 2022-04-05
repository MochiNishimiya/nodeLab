var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// css purpose
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.json());
var indexRouter = require('./routes/index');
var sendSecretRouter = require('./routes/sendSecret');
var subdomainRouter = require('./routes/subdomain');
app.use('/', indexRouter);
app.use('/sendSecret', sendSecretRouter);
app.use('/subdomain', subdomainRouter);

app.listen(port, () => {
  console.log(`[+] Running level2 on port ${port}, root: "${__dirname}"`);
});