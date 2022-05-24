// Create all my variables at the top
const express = require('express');
const cors = require('cors');
const app = express();
const movieRoutes = require('./routes/movie-routes.js');
const ticketRoutes = require('./routes/ticket-routes.js');

// Use my variables

app.use(cors());

// Add a base path to our routes
// When accessing a movie path, put /movie in front
app.use('/movie', movieRoutes);
app.use('/ticket', ticketRoutes);

// Old way - Creating all paths in our main config file.. bad idea 
// Dedicated files for storing paths / methods / business logic 
// Modularity, as our app will likely be storing different types of objects 
// Cinema project, objects for: Movies, tickets, drinks/food, different sets of routes for each object

// Exercise - Either in a new express app or existing add a routes folder and create paths for the following: 
// .get, .put, .post, .delete 
// Tell your server / index.js to run the route file
// .delete(() => res.send("deleted!"))

const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
})