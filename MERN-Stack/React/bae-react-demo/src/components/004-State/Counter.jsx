// Counter is going to take in setNumber which is a function
const Counter = ({changeValue}) => {

    // Counter is running the changeValue method and passing in 5
    changeValue(5000000);

// When making a button, onClick means "What do I do when this is clicked?"
    return (
        <>
            <h2> Counter is working!</h2>
        </>
     );
}
 
export default Counter;