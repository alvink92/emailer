const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

// connect mongoose to our mongodb database
mongoose.connect(keys.mongoURI);

const app = express();

// connects authRoutes to app
authRoutes(app);

// dynamic PORT address
const PORT = process.env.PORT || 3000;
app.listen(PORT);