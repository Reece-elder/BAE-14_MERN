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

router.post("/createMany", (req, res, next) => {

    // Making a variable of our body, this variable will be an array
    const data = req.body; 

    // Loops through an array, for each item in an array.. do this thing
    data.forEach((movieData) => {
        const movieObj = new movie(movieData); // Make a new object
        movieObj.save().then((result) => {
            // our method can only have one response  
            console.log(`${result.title} has been added to database`);
        }).catch((error) => {
            next(error); 
        });
    });
    res.status(201).send("All Data added to DB");
});

// Read Request(s)
// GetAll 
// GetById MySQL - (1, 2, 530) mongoDB ids (bfyebf37383782b3bf2e2)
router.get("/getId/:id", (req, res, next) => {
    const id = req.params.id;
    // finding the object by id
    movie.findById(id, (error, movie) => {
        // doing this with the object that is found (returning the data)
        res.status(200).send(movie); 
    });
});

router.get("/getRating/:rating", (req, res, next) => {
    const rating = req.params.rating;
    // finding the object by id
    // Once it finds one data, it stops
    movie.findOne({'rating' : rating}, (error, movie) => {
        res.status(200).send(movie);
    });
});

router.get("/getAll", (req, res, next) => {
    movie.find((error, movies) => {
        res.status(200).send(movies);
    });
});

router.delete("/deleteId/:id", (req, res, next) => {
    movie.findByIdAndDelete(req.params.id, (error) => {
        res.status(202).send("movie deleted");
    });
});

// Update takes in a request body AND a request id
router.put("/updateId/:id", (req, res, next) => {
    const data = req.body;
    const id = req.params.id;
    movie.findByIdAndUpdate(id, data, (error, movie) => {
        res.status(202).send("Movie updated!");
    });
});


// movie.deleteMany({'query' : value})





// Export this file as a module, so server can use it 
module.exports = router;