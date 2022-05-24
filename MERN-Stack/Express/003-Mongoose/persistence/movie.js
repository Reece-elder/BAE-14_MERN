// Creating our Schema for a Movie Object
const mongoose = require('mongoose');

// D _ _ t r _ c t _ _ _
// D E S T R U C T U R I N G
// Destructuring pulling variables / functions out of another object
// Create new variables called Schema and model
const {Schema, model} = mongoose;

// Schema looks like a JSON, key value pairs 
// value is the type of data (number == int, float, long, double, byte)
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    }, 
    releaseYear: Number,
    rating: Number,
    ageRating: String
});

// Make a 'model' of our Movie using the schema 
// model takes in the name of your schema (create a collection) AND the schema itself
const movie = model('movie', movieSchema);

module.exports = movie;