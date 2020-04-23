const express = require("express");
const MatchDB = require("../repositories/MatchDB");
const UserProfile = require("../models/UserProfile");

const router = express.Router();

router.get("/", (req, res) => {
    let kyuMatchData = [];
    let danMatchData = [];

    kyuMatchData = new MatchDB().getKyuMatches();
    danMatchData = new MatchDB().getDanMatches();


    res.render('index', { kyuMatchData: kyuMatchData, danMatchData: danMatchData });
});

router.get("/newMatch", (req, res) => {
    res.render("newMatch");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/matches", (req, res) => {
    const profile = new UserProfile(req.session.username);
    let yesMatches = [];
    let maybeMatches = [];

    console.log("USERNAME: " + req.session.username);

    yesMatches = profile.getUserMatchesRsvp(req.session.username, "yes");
    maybeMatches = profile.getUserMatchesRsvp(req.session.username, "maybe");

    console.log("YES MATCHES: " + yesMatches);
    console.log("MAYBE MATCHES: " + maybeMatches);

    let data = new MatchDB().getMatches();

    res.render('matches', { data: data, yesMatches: yesMatches, maybeMatches: maybeMatches });
});

module.exports = router;
