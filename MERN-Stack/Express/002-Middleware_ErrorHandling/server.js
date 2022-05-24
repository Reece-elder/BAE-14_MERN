// Create all my variables at the top
const express = require('express');
const cors = require('cors');
const app = express();
const movieRoutes = require('./routes/movie-routes.js');

// Use my variables

// Middleware - Additional functionality you can use to give more info and meaning 
// Middleware used to help transfer data or info (api)
// generally does something to the data, converts it or moves it somewhere else

// Middleware - removes any CORS errors we may get (cross origin request something)
app.use(cors());

// Middleware tells our app to use the movieRoutes file
app.use('/movie', movieRoutes);

// Custom Middleware
// middleware takes in a next() callback (callback is a function passed as a parameter)
// middleware runs next() -> it calls the next middleware in the chain (down the file) 
app.use((req, routes, next) => {
    console.log("middleware fired!");
    next(); // If you don't put next() OR res.send into a middleware it just hangs
});

app.use((req, res, next) => {
    console.log("Fourth middleware!");
    next();
});

// Error Handling Middleware
// When an error comes in, print the error out then call next()
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log("Post Error");
    next();
});


const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
})