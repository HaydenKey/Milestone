const express = require("express");
const User = require("../models/User");
const UserProfile = require("../models/UserProfile");

const router = express.Router();

router.get("/login", (req, res) => {
    res.render('login');
});

router.get("/signup", (req, res) => {
    res.render('signup');
});

router.post("/login", async (req, res) => {
    let user = await User.findOne({username: req.body.username});

    console.log(user);

    if (user == null) {
        res.redirect("signup");
    }

    if (user.password === req.body.password) {
        const profile = new UserProfile(req.body.username);
        req.session.profile = profile;

        let yesMatches = [];
        let maybeMatches = [];

        yesMatches = await profile.getUserMatchesRsvp(req.body.username, "yes");
        maybeMatches = await profile.getUserMatchesRsvp(req.body.username, "maybe");

        res.render('matches', {yesMatches: yesMatches, maybeMatches: maybeMatches});
    } else {
        res.redirect("login");
    }
});

router.post("/signup", (res, req) => {
    if (User.findOne({username: req.body.username}) != null) {
        User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            connections: []
        });

        let yesMatches = [];
        let maybeMatches = [];

        res.render('matches', {  yesMatches: yesMatches, maybeMatches: maybeMatches });
    } else {
        res.redirect('login');
    }
});

module.exports = router;
