var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.sendFile(path.resolve(__dirname + '/../views/index.html'));
});

module.exports = router;
