// Dependencies
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./server/config');
const compression = require('compression');
const bodyParser = require('body-parser');
const fs = require('fs');
const passport = require('passport');

// Express and Port
const app = express();
const port = process.env.PORT || 3000;

// Declare Mongoose Connection Parameters
const options = {
    //reconnectTries: 10, // Never stop trying to reconnect
    //reconnectInterval: 500, // Reconnect every 500msi.e 0.5 sec
    poolSize: 15, // Maintain up to 15 socket connections
    socketTimeoutMS: 0, // Close sockets after 5 minute of inactivity
    connectTimeoutMS: 0,
    family: 4, // Use IPv4, skip trying IPv6
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect to database via mongoose
mongoose.set('useNewUrlParser',true);
mongoose.set('useCreateIndex',true);
mongoose.connect(config.MONGO_URI, options)
  .then(() => console.log(`MongoDB is Up ${config.MONGO_URI}`))
  .catch(err => console.log(err));

// Routes
const apis = require('./server/api');
//const quizs = require('./server/quiz');
//const users = require('./server/user');


// Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Body Parser
app.use(bodyParser.json({type: 'application/json'}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use Compression for performance
app.use(compression());

// Passport
require('./server/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());


// ******************************************
// ROUTES
// ******************************************
// API calls go here
app.use('/apis', apis);




// ******************************************
// SERVER BASIC ROUTES
// ******************************************

// Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {
  res.send("Invalid Endpoint");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// ******************************************
// API ERROR HANDLER
// ******************************************
// Error handler for 404 - Page Not Found
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    res.status(404).json({
        status: 404,
        message: err.message,
        name: err.name
    });
});

// Error handler for all other errors
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({
        status: 500,
        message: err.message,
        name: err.name
    });
});





// ******************************************
// SERVER START
// ******************************************
app.listen(port, () => console.log(`Server started on port ${port}`));
app.listen().setTimeout(0); 



