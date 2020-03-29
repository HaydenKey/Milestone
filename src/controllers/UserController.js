const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
    res.render('login');
});

router.post("/login", (req, res) => {
    console.log("post");
    console.log(req.body.username);
});

module.exports = router;
