// Importing the router object from our express framework 
const router = require('express').Router();

// Import in our Movie model 
// .. -> Lifts you up a folder
const movie = require('../persistence/movie'); 

// Sanity Test Route
router.get("/", (req, res, next) => {
    res.send("Yep, it works!");
});

// Create Method (Post data into our mongoDB)
router.post("/create", (req, res, next) => {

    // Make a variable that is equal to the req.body 
    const record = req.body;
    // make a new movie out of record (like a java constructor)
    const movieObj = new movie(record);
    // using the inbuilt functions, add this movieObj to our database
    movieObj.save() // once our .save() has run, whatever it returns pass into our .then()
        .then((result) => {  // call the data .save() returns result and do the following:
            res.status(201).send(`${result.title} has been added to database`)
        }).catch((error) => {
            next(error); // if there are any errors, pass them onto the error handling middleware
        });
});

router.post("/createTwo", (req, res, next) => {
    res.send("Does this work now?");
});




// Export this file as a module, so server can use it 
module.exports = router;