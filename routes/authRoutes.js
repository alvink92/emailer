const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );


// // how to applying middleware
//   app.use("/api/current_user", (req, res, next) => {
//     console.log("mw 1");
//     next();
//   });
//   app.use("/api/current_user", (req, res, next) => {
//     console.log("mw 2");
//     next();
//   });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });


  app.get("/api/logout", (req, res) => {
    // logout method gets bound to request by passport library, kills cookie
    req.logout();
    // shows logged out user
    // res.send(req.user);
    res.redirect("/");
  });
};