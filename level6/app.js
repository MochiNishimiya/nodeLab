var express = require('express');
var morgan = require('morgan');
var path = require('path');
var cookie_parser = require('cookie-parser');
var bodyParser = require('body-parser');

global.sessions = {}

var app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Store global var and func
global.usernameArr = [];
global.passwordArr = [];
global.userToSession = new Map();
global.sessionMap = new Map();

global.checkValid = function(session) {
  let re = /^[a-z0-9-]{1,36}$/i;  // typo
  return re.exec(session);
}

// css purpose
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.json());
var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var subdomainRouter = require('./routes/subdomain');
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/subdomain', subdomainRouter);

app.listen(port, () => {
  console.log(`[+] Running level4 on port ${port}, root: "${__dirname}"`);
});