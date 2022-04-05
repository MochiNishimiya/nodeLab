var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("login");
});

router.post('/', function(req, res) {
    username = req.body.username;
    password = req.body.password;

    for (let i=0; i<global.usernameArr.length; i++) {
        if (username === global.usernameArr[i] && password === global.passwordArr[i]) {
            res.send('Hi champ!');  // Get flag
        }
    }

    res.send('Biến hacker!');
});

module.exports = router;
