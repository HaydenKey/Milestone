const express = require("express");
const MatchDB = require("../repositories/MatchDB");
const UserProfile = require("../models/UserProfile");

const router = express.Router();

router.get("/login", (req, res) => {
    res.render('login');
});

router.post("/login", (req, res) => {
    const profile = new UserProfile(req.body.username);
    req.session.profile = profile;

    let yesMatches = [];
    let maybeMatches = [];

    yesMatches = profile.getUserMatchesRsvp(req.body.username,"yes");
    maybeMatches = profile.getUserMatchesRsvp(req.body.username,"maybe");

    let data = new MatchDB().getMatches();

    res.render('matches', { data: data, yesMatches: yesMatches, maybeMatches: maybeMatches });
});

module.exports = router;
