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
            // generate a random UUID as the session token
            const sessionToken = uuid.v4()

            // set the expiry time as 120s after the current time
            const now = new Date()
            const expiresAt = new Date(+now + 120 * 1000)

            // create a session containing information about the user and expiry time
            const session = new Session(username, expiresAt)
            // add the session information to the sessions map
            global.sessions[sessionToken] = session

            // In the response, set a cookie on the client with the name "session_cookie"
            // and the value as the UUID we generated. We also set the expiry time
            res.cookie("session_token", sessionToken, { expires: expiresAt })
            return res.send("Đăng nhập thành công!")
        }
    }

    return res.send('Đăng nhập thất bại!');
});

module.exports = router;
