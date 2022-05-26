import PizzaOrder from "./PizzaOrder";
import {useState} from 'react';

const PizzaForm = () => {

    // Individual PizzaData - Stay the same
    const [pizzaData, setPizzaData] = useState({});

    const [pizzaArray, setPizzaArray] = useState([]);

    // Add my method to set the data
    const setData = (event) => {
        const {name, value} = event.target;

        setPizzaData((prevValue) => ({
           ...prevValue, 
           [name]: value,
        }))
    };

    // In HTML you SHOULDN't duplicate IDs, they should ALWAYS be unique

    const addToArray = () => {

        // Our array is called pizzaArray, but to set data we need to use our setPizzaArray
        setPizzaArray((prevArray) => {      // prevArray - Current value of our state
            return[...prevArray, pizzaData] // Same thing as array.push, ignore all data and put this at the end
        });
        
        // I want my pizzaData to reset to empty 
        setPizzaData({}) // Set Pizza Object state to {} empty curly brackets (empty object)
    }

    return ( 
        <>
            <label name="type"> Type: </label>
            <input type="text" name="type" onChange={(event) => setData(event)}/>
            <label name="size"> Size: </label>
            <input type="number" name="size" onChange={(event) => setData(event)}/>
            <label name="customer"> Customer: </label>
            <input type="text" name="customer" onChange={(event) => setData(event)}/>
            <label name="stuffedCrust"> Stuffed Crust: </label>
            <input type="radio" name="stuffedCrust" value={true} onChange={(event) => setData(event)}/> True
            <input type="radio" name="stuffedCrust" value={false} onChange={(event) => setData(event)}/> False

            {/* Button to add this info as an object to our array */}
            <button type="button" onClick={addToArray}> Click to add Order! </button>
            <button type="button" onClick={() => console.log(pizzaArray)}> Print out the orders! </button>

            {/* Array.map is used to loop through the array and returns an object */}
            {
                pizzaArray.map((pizza) => {
                    // Important you remember to return this component!
                    return <PizzaOrder data={pizza}/>
                })
            }
        </>
        // Exercise - Convert your Pizza Order into returning an array of data like above
     );
}
 
export default PizzaForm;