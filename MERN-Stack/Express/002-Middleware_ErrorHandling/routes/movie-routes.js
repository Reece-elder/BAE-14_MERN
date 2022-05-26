// This file will only have methods / routes for the movies 
 
// Importing the router object from our express framework 
const router = require('express').Router();

// Nested Middleware - Create a custom middleware object, that we specify only certain paths use
// this won't run on itself because app.use never uses it!
const printTime = (req, res, next) => {
    console.log("Pls print");
    console.log(new Date());
    next();
};


// rather than app.get we use router.get
router.get('/getAll', (req, res, next) => {
    console.log("Do something pls");
    res.send("All Movies retrieved");
    next();
}); 

// nested middleware, passed in the name of our middleware
router.get("/time", printTime, (req, res) => {
    res.send("time printed!");
});

// Make a path that creates an error
// All paths 'can' take in a next() so you can specify what to do with an error OR middleware
router.get("/error", (req, res, next) => {

    // when we run this path create an error
    throw new Error('Big Scary Error!!');
    // When an error is thrown, find the first middleware wit (err) as a callback
    // Middleware is called before res.send is sent, but directly before 
});


// Export this file as a module, so server can use it 
module.exports = router;