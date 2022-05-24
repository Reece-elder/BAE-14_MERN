// This file will only have methods / routes for the movies 
 
// Importing the router object from our express framework 
const router = require('express').Router();

// rather than app.get we use router.get
router.get('/getAll', (req, res) => {
    console.log("Do something pls");
    res.send("All tickets retrieved");
}); 


// Export this file as a module, so server can use it 
module.exports = router;