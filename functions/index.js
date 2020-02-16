const functions = require("firebase-functions");
const express = require("express");
const app = express();
const router = express.Router();

require("./startup/db")();
require("./startup/validation")();
require("./startup/middleware")(app);
require("./startup/routes")(router);

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

// exports.app = functions.https.onRequest(app);
