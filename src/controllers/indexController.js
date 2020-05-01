const express = require("express");
const mongoose = require("mongoose");
const UserProfile = require("../models/UserProfile");
const MatchDB = require("../repositories/MatchDB");
const Match = require("../models/match");
const User = require("../models/User");

mongoose.connect('mongodb://localhost/goDB', {useNewUrlParser: true});

const router = express.Router();

router.get("/", (req, res) => {
    Match.find()
        .exec()
        .then(doc => {
            let kyuMatchData = [];
            let danMatchData = [];

            for (let i = 0; i < doc.length; i++) {
                if (doc[i].rank === "kyu") {
                    kyuMatchData.push(doc[i]);
                } else {
                    danMatchData.push(doc[i]);
                }
            }

            res.render('index', { kyuMatchData: kyuMatchData, danMatchData: danMatchData });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
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

// TODO: change this to user and make it grab connections from the array in users
// TODO: if possible, move this to UserProfile
router.get("/matches", async (req, res) => {
    if (req.session.profile != null) {
        let matches = [];
        //TODO: change to use sessions
        matches = await new UserProfile().getUserMatches("hkey8@uncc.edu");
        let yesMatches = [];
        let maybeMatches = [];

        for (let i = 0; i < matches.length; i++) {
            if (matches[i].rsvp === "yes") {
                yesMatches.push(matches[i]);
            } else {
                maybeMatches.push(matches[i]);
            }
        }

        res.render('matches', { yesMatches: yesMatches, maybeMatches: maybeMatches });
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
