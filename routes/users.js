var express = require('express');
var router = express.Router();

var User = require('../model/user');

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        res.status(err ? 400 : 200).send(err || users);
    });
});

router.post('/', (req, res) => {
    User.register(req.body, err => {
        res.cookie('chocolatecookie', 'chunky');
        res.status(err ? 400 : 200).send(err);

    });
});

router.post('/authenticate', (req, res) => {
    User.authenticate(req.body, (err, token) => {
        if (err) return res.status(400).send(err);
        res.cookie('accessToken', token).send(token);
    });
});

router.delete('/logout', (req, res) => {
    res.clearCookie('accessToken').send();
});

router.get('/profile', User.isLoggedIn, (req, res) => {
    console.log('req.user:', req.user);
    res.send(req.user);
})

router.put('/profile', User.isLoggedIn, (req, res) => {

  User.findByIdAndUpdate(req.user._id, {$set: req.body})
    req.user.profileImage = req.body.profileImage;
    req.user.save(err => {
    });
})

module.exports = router;
