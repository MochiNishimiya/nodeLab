var express = require('express');
var https = require('https');
crypto = require("crypto");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("sendSecret");
});

router.post('/', function(req, res) {
  URL = req.body.URL;

  let re = /^https:\/\/.*.cyberjutsu.io/;
  let ok = re.exec(URL);

  // For debugging purpose only
  // ok = 1;

  if (!ok) {
    res.send('Cút mấy thằng Hacker');
  } 
  else {
    let secret = "REDACTED";
    let request = URL + '/?token=' + secret;
    
    https.get(request, (resp) => {
      res.send("Ok!");
    }).on("error", (err) => {
      res.send("Error!");
    });
  }
});

module.exports = router;
