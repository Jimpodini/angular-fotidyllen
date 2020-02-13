const auth = require("../routes/auth");
const user = require("../routes/user");

module.exports = function registerRoutes(router) {
  router.use("/auth", auth);
  router.use("/user", user);
};
