const express = require("express");
const MatchDB = require("../repositories/MatchDB");
const UserProfile = require("../models/UserProfile");

const router = express.Router();

router.get("/matches", (req, res) => {
    let yesMatches = [];
    let maybeMatches = [];

    // should be executing twice, but only executing once
    console.log("getting /matches");

    for (let i = 0; i < yesMatches.length; i++) {
        yesMatches += new MatchDB().getMatch(yesMatches[i].id);
    }

    for (let i = 0; i < maybeMatches.length; i++) {
        maybeMatches += new MatchDB().getMatch(maybeMatches[i].id);
    }

    res.render('matches', { yesMatches: yesMatches, maybeMatches: maybeMatches });
});

router.get("/:id", function(req, res) {
    let id = req.params.id;
    let con = new MatchDB().getMatch(id);
    let currentMatch = {
        id: con.id,
        title: con.title,
        location: con.location,
        date: con.date
    };

    res.render("match", { data: currentMatch });
});

router.post('/:id', (req, res) => {
    if (req.session.profile != null) {
        let userID = req.session.profile.userName;
        let matchId = req.params.id;
        let rsvp = req.body.rsvp;
        let user = new UserProfile(userID);

        if (rsvp === 'yes') {
            user.removeMatch(userID, matchId);
            user.addMatch(userID, matchId, rsvp);
            res.redirect('matches');
        } else if (rsvp === 'no') {
            user.removeMatch(userID, matchId);
            res.redirect('matches');
        } else if (rsvp === 'maybe') {
            user.removeMatch(userID, matchId);
            user.addMatch(userID, matchId, rsvp);
            res.redirect('matches');
        }
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
