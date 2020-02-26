const express = require("express");
const MatchDB = require("../repositories/MatchDB");
const Match = require("../models/match");

const router = express.Router();

router.get("/myMatches", (req, res) => {
    res.render("myMatches");
});

router.get("/:id", function(req, res) {
    let id = req.params.id;
    let con = new MatchDB().getMatch(id);
    let currentConnection = new Match(
        con.connectionId,
        con.player0,
        con.player1,
        con.location,
        con.date
    );

    res.render("connection", { data: currentConnection });
});

module.exports = router;
