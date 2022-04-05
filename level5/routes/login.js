var express = require('express');
const path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    return res.sendFile(path.resolve(__dirname + '/../views/login.html'));
});

router.post('/', function(req, res) {
    username = req.body.username;
    password = req.body.password;

    for (let i=0; i<global.usernameArr.length; i++) {
        if (username === global.usernameArr[i] && password === global.passwordArr[i]) {
            return res.send('REDACTED');  // Get flag
        }
    }

    return res.send('Đăng nhập thất bại!');
});

module.exports = router;
