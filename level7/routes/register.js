var express = require('express');
var https = require('https');
const path = require('path');
const { execArgv } = require('process');
crypto = require("crypto");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.sendFile(path.resolve(__dirname + '/../views/register.html'));
});

router.post('/', function(req, res) {
  username = req.body.username;
  password = req.body.password;

  const re = /.+@.+\..+/;
  let ok = re.exec(username);

  if (!ok) {
    return res.send('Username phải là một email hợp lệ!');
  }
  else {
    global.usernameArr.push(username);
    global.passwordArr.push(password);
    
    return res.send('OK!');
  }
});

module.exports = router;