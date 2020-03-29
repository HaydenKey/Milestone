const express = require("express");
const MatchDB = require("../repositories/MatchDB");
const Match = require("../models/match");

const router = express.Router();

router.get("/myMatches", (req, res) => {
    let data = new MatchDB().getMatches();

    res.render("matches", {data: data});
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

module.exports = router;
