const indexRouter = require("./controllers/indexController");
const matchRouter = require("./controllers/matchController");
const userControllerRouter = require("./controllers/UserController");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(
    session({
        secret: "5166"
        //cookie: { secure: false }
    })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/connection/assets", express.static(path.join(__dirname, "assets")));

app.use("/", indexRouter);
app.use("/match", matchRouter);
app.use("/userController", userControllerRouter);

app.listen(8084);
console.log("listening on port 8084");