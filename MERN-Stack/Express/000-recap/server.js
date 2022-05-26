// Could everyone in chat write the command to install our backend framework 

// Importing the express module, grabbing the object called express
const express = require('express');

// Create a variable called app, equal to our express object function
const app = express();


// Create a path that will listen for /hello and console log "hello"
// app - express backend 
// .get - GET request, used for retrieving data
// look for /hello, arrow function for what to do when it finds /hello

app.get('/hello', (req, res) => {
    // stop the function from hanging
    return console.log("Hello World");
}); 

// How can I make a post request? that listens to /post
app.post('/post', (req, res) => {
    return console.log("Post request made!");
})

// Path that /name and I want it to print the value of my name
app.get('/name/:name', (req, res) => {
    const name = req.params.name; 
    // res.sendStatus(202).json({message: "Successful request!"})
    res.status(202).send(`Hi ${name}, how are you doing?`);
})

// How can we tell express to run and listen to a specific port number?
// Making a new object/function  called server 
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
})