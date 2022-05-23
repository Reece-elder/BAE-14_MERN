// Create all my variables at the top
const express = require('express');
const cors = require('cors');
const app = express();
const movieRoutes = require('./routes/movie-routes.js');
const mongoose = require('./persistence/database.js'); // This is connecting to our mongoDB 
const { json } = require('express');

// Middleware - removes any CORS errors we may get (cross origin request something)
app.use(cors());
app.use(express.json()); // Converting our JSON into a JS object for us to use

// Middleware tells our app to use the movieRoutes file
app.use('/movie', movieRoutes);

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