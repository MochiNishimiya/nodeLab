var express = require('express');
var https = require('https');
const path = require('path');
crypto = require("crypto");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.sendFile(path.resolve(__dirname + '/../views/register.html'));
});

router.post('/', function(req, res) {
  email = req.body.email;

  let re = /.+@.+.cbjs.io/;
  let ok = re.exec(email);

  if (!ok) {
    return res.send('Email không hợp lệ!');
  }
  else {
    username = email.split('@')[0];
    url = email.split('@')[1];
    
    let password = crypto.randomBytes(20).toString('hex');
    let request = 'https://' + url + '/?username=' + username + '&password=' + password;
    
    global.usernameArr.push(username);
    global.passwordArr.push(password);
    
    https.get(request, (resp) => {
      res.send("Ok!");
    }).on("error", (err) => {
      res.send("Error!");
    });
  }
});

module.exports = router;
