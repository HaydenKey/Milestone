const express = require("express");
const MatchDB = require("../repositories/MatchDB");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
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
    let allMatches = new MatchDB().getMatches();
    let matchData = {
        matchData: allMatches
    };

    res.render("matches", { data: matchData });
});

module.exports = router;
