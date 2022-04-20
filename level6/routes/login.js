var express = require('express');
var uuid = require('uuid');
const path = require('path');
var router = express.Router();

class Session {
    constructor(username, expiresAt) {
        this.username = username
        this.expiresAt = expiresAt
    }
  
    isExpired() {
        this.expiresAt < (new Date())
    }
  }

router.get('/', function(req, res, next) {
    return res.sendFile(path.resolve(__dirname + '/../views/login.html'));
});

router.post('/', function(req, res) {
    username = req.body.username;
    password = req.body.password;

    for (let i=0; i<global.usernameArr.length; i++) {
        if (username === global.usernameArr[i] && password === global.passwordArr[i]) {
            var isAdmin = global.sessionMap[global.userToSession[username]];

            if (isAdmin) {
                return res.sendFile(path.resolve(__dirname + '/../views/welcomeAdmin.html'));
            }
            else {
                return res.sendFile(path.resolve(__dirname + '/../views/welcomeUser.html'));
            }
        }
    }

    return res.send('Đăng nhập thất bại!');
});

module.exports = router;
