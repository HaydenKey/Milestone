const express = require("express");
const MatchDB = require("../repositories/MatchDB");
const mongoose = require('mongoose');
const UserProfile = require("../models/UserProfile");
const Match = require("../models/match");

const router = express.Router();

mongoose.connect('mongodb://localhost/goDB', {useNewUrlParser: true});

// TODO: change this to user and make it grab connections from the array in users
// TODO: if possible, move this to UserProfile
router.get("/matches", async (req, res) => {
    if (req.session.profile != null) {
        let userID = req.session.profile.userName;
        let matches = [];
        //TODO: change to use sessions
        matches = await new UserProfile().getUserMatches(userID);
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

router.get("/:id", async (req, res) => {
    let id = req.params.id;

    await Match.findById(id)
        .exec()
        .then(doc => {
            res.render("match", { data: doc });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post('/:id', async (req, res) => {
    if (req.session.profile != null) {
        let userID = req.session.profile.userName;
        let matchId = req.params.id;
        let rsvp = req.body.rsvp;
        let user = new UserProfile(userID);

        if (rsvp === 'yes') {
            await user.removeMatch(userID, matchId);
            await user.addMatch(userID, matchId, rsvp);
            res.redirect('matches');
        } else if (rsvp === 'no') {
            await user.removeMatch(userID, matchId);
            res.redirect('matches');
        } else if (rsvp === 'maybe') {
            await user.removeMatch(userID, matchId);
            await user.addMatch(userID, matchId, rsvp);
            res.redirect('matches');
        }
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
