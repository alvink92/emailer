const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

// routes
const authRoutes = require("./routes/authRoutes");

require("./models/User");
require("./services/passport");

// dynamic PORT address
const PORT = process.env.PORT || 5000;

// connect mongoose to our mongodb database
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// connects authRoutes to app
authRoutes(app);

app.listen(PORT);
