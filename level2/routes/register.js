var express = require('express');
var https = require('https');
crypto = require("crypto");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("register");
});

router.post('/', function(req, res) {
  email = req.body.email;

  let re = /.+@.*.cbjs.io$/;
  let ok = re.exec(email);

  // For debugging purpose only
  // ok = 1;

  if (!ok) {
    res.send('Cút mấy thằng Hacker');
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
