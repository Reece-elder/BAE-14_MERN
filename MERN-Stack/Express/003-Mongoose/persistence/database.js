// Write some functions to connect to our Database (MongoDB)
// Tell our app to manually connect with our functions

// Create a 'Schema' for our object 'Movie' to push it into our MongoDB

// Install the dependencies we need 
// npm i express cors mongoose

const mongoose = require('mongoose');
// Mongoose is a API for posting and retrieving data from our MongoDB 

// MongoDB Connection String 
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true}, (err) => {
// if our mongoose.connect returns (with an error) tell us theres an error    
if(err){
        console.log("Error!");
    } else {
        console.log("No error! Is this the correct one?");
    }
});

module.exports = mongoose;
