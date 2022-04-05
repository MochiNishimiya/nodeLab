var express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.sendFile(path.resolve(__dirname + '/../views/index.html'));
});

module.exports = router;
