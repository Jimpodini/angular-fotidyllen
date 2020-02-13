const config = require("config");

module.exports = function() {
  try {
    config.get("jwtPrivateKey");
  } catch (ex) {
    console.log("fotidyllenPrivateKey is not defined. Exiting process..");
    process.exit(1);
  }
};
