// keys.js
if (process.env.NODE_ENV === "production") {
  module.exports = {
    clientID: {
      google: process.env.GOOGLE_CLIENT_ID
    },
    clientSecret: { google: process.env.GOOGLE_CLIENT_SECRET },
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
  };
} else {
  module.exports = {
    clientID: {
      google:
        "1030407476662-g4kud6hrkit1trpnidjckbf91f468big.apps.googleusercontent.com"
    },
    clientSecret: {
      google: "XgODr0topWk8xbLPP3vpb-NY"
    },
    mongoURI:
      "mongodb://alvink92:password@ds113826.mlab.com:13826/emailer-dev-alvin",
    cookieKey: "kalfjdlaksjflkjoieqwALKJF341298kjfadfaueqwofqijlj1lk1j23"
  };
}
