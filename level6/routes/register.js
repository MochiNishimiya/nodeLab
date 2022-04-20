var express = require('express');
var https = require('https');
const path = require('path');
var router = express.Router();
var v = require('validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.sendFile(path.resolve(__dirname + '/../views/register.html'));
});

router.post('/', function(req, res) {
  username = req.body.username;
  password = req.body.password;
  session = req.body.uuid;

  if (!global.checkValid(session)) {
    return res.send('UUID không hợp lệ!');
  }
  if (!global.checkValid(username)) {
    return res.send('Username không hợp lệ!');
  }
  if (!global.checkValid(password)) {
    return res.send('Password không hợp lệ!');
  }

  global.usernameArr.push(username);
  global.passwordArr.push(password);
  global.userToSession[username] = session;
  console.log(v.isUUID(session))
  if (v.isUUID(session) && session !== "1f3d8611-13ec-4e54-a28a-3c41953b6e47") {  // Normal user, dummy session
    global.sessionMap[session] = 0;
  }
  else global.sessionMap[session] = 1;  // Admin user
  console.log(global.userToSession);
  console.log(global.sessionMap);

  return res.send('OK!');
});

module.exports = router;