// Passing in the setState function and creating my custom function here
const Calculator = ({setCalValue}) => {

    // Standard function, with a name of 'HelloWorld' and it takes in a name 
    function HelloWorld (name) {
        console.log(`Hello ${name}`);
    };

    // Benefit of an arrow function, is it saves the function as a reusable variable 
    const HelloWorldArrow = (name) => {
        console.log(`Hello ${name}`);
    };


    const addOne = () => {
        // Take the current value of our state, and increase by 1 
        // Any number++ increases it by 1 -> 5++ = 6

        // setValue = used to set the value of our state
        // Pass in an arrow function into setValue that increases the current value by 1 
        // setValue 'knows' the current value of the state, and calling it 'x'
        setCalValue((x) => {
            return x + 1;
        });
    };

    return ( 
    <>
        <button type="button" onClick={addOne}> Click me to add One! </button>
        <button type="button" onClick={() => {HelloWorld("Reece")}}> Click me to print name! </button>
        <button type="button" onClick={() => {HelloWorldArrow("ReeceTwo")}}> Click me to also print name! </button>
    </> 
    );
}
 
export default Calculator;