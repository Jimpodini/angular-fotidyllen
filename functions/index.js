const functions = require("firebase-functions");
const express = require("express");
const app = express();
const router = express.Router();

require("./startup/db")();
require("./startup/validation")();
require("./startup/middleware")(app);
require("./startup/routes")(router);

app.use("/api", router);

exports.app = functions.https.onRequest(app);
