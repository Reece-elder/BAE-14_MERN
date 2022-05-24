// Our Counter component is merely a function that can take in parameters
// parameters are simply props

// Our component takes in some 'props'
// props is all of the data transferred to it
const Counter = (props) => {
    
    // making a new variable called score, the score attribute of props
    const score = props.score;
    return ( 
        // Using score as our variable name
        <h2> The current score is {score} </h2>
     );
}
 
export default Counter;