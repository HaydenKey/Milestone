const indexRouter = require("./controllers/indexController");
const matchRouter = require("./controllers/matchController");
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/connection/assets", express.static(path.join(__dirname, "assets")));

app.use("/", indexRouter);
app.use("/match", matchRouter);

app.listen(8084);
console.log("listening on port 8084");