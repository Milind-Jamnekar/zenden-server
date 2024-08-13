const Authentication = require("./controllers/authentication");
const Tasks = require("./controllers/tasks");
const passport = require("passport");
require("./services/passport");

const requireAuth = passport.authenticate("jwt", {
  session: false,
});
const requireSignIn = passport.authenticate("local", {
  session: false,
});

module.exports = function (app) {
  //Auth endpoints
  app.post("/auth/login", requireSignIn, Authentication.signin);
  app.post("/auth/register", Authentication.signup);
  app.post("/auth/logout", requireAuth, function (req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });

  //CRUD tasks endpoint
  app.get("/tasks", Tasks.getAll);
  app.post("/task", Tasks.post);
  app.put("/task/:id", Tasks.update);
  app.delete("/task/:id", Tasks.delete);
};
