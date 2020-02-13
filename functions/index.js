const functions = require("firebase-functions");
const express = require("express");
const app = express();
const router = express.Router();

require("./startup/db")();
require("./startup/validation")();
require("./startup/middleware")(app);
require("./startup/routes")(app);

router.get("/test", (req, res) => {
  res.send("hejsan");
});

app.use("/api", router);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
