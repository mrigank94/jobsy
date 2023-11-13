const { signin, signup } = require("../controllers/auth.controller");

module.exports = function (app) {
  app.post("/jobsy/api/v1/auth/signin", signin);

  app.post("/jobsy/api/v1/auth/signup", signup);
};
