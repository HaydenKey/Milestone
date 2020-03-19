const express = require("express");
const MatchDB = require("../repositories/MatchDB");
const Match = require("../models/match");

const router = express.Router();

router.get("/myMatches", (req, res) => {
    res.render("matches");
});

router.get("/:id", function(req, res) {
    let id = req.params.id;
    let con = new MatchDB().getMatch(id);
    let currentMatch = new Match(
        con.id,
        con.player0,
        con.player0Rank,
        con.player1,
        con.player1Rank,
        con.location,
        con.date
    );

    res.render("match", { data: currentMatch });
});

module.exports = router;
