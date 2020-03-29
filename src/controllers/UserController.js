const express = require("express");
const MatchDB = require("../repositories/MatchDB");
const UserProfile = require("../models/UserProfile");

const router = express.Router();

router.get("/login", (req, res) => {
    res.render('login');
});

router.post("/login", (req, res) => {
    console.log("post");
    console.log(req.body.username);
    const profile = new UserProfile(req.body.username);

    let data = new MatchDB().getMatches();

    res.render('matches', { profile: profile, data: data });
});

module.exports = router;
