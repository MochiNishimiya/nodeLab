var express = require('express');
var https = require('https');
crypto = require("crypto");
const path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.sendFile(path.resolve(__dirname + '/../views/sendSecret.html'));
});

router.post('/', function(req, res) {
  URL = req.body.URL;

  let re = /^https:\/\/[^\/]*.cyberjutsu.io/;
  let ok = re.exec(URL);

  if (!ok) {
    res.send('URL không thuộc subdomain của Cyberjutsu.');
  } 
  else {
    let secret = "REDACTED";
    let request = URL + '/?token=' + secret;
    
    https.get(request, (resp) => {
      return res.send("Ok!");
    }).on("error", (err) => {
      return res.send("Error!");
    });
  }
});

module.exports = router;
