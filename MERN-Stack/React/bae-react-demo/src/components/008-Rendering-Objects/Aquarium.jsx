// Our aquarium will render an array of Fish Objects 
// We will use a form, to allow us to create our own fish objects

import { useState } from "react";
import Fish from "./Fish";

const Aquarium = () => {

    // Two Sets of State, one for creating a new fish, one for our array of objects
    const [fish, setFish] = useState({});
    const [fishArray, setFishArray] = useState([]);

    // Method to set and update our fish State
    const setData = (event) => {
        const {name, value} = event.target;
        setFish((prevValue) => ({
           ...prevValue,  // ... Spread Operator, ... = all other values is equal to prevValue
           [name]: value
        }))
    };

    const addFish = () => {
        setFishArray((prevArray) => {
            return[...prevArray, fish] // ...prevValue = all existing values in array, put our fish object at the end
                                       // Creating a new array, using the previous values and putting our data at the end
        });
        setFish({});                   // Setting our fish to be an empty object 
        console.log(fish.name);
        // State is asynchronous meaning it is setting state, but the other code is running before we get a value
    }


    return ( 
        <>
            {/* Functionally NO DIFFERENT to a <div> or a <> but is semantic, lets users know this is a form */}
            <form>
                <label name="name"> Name: </label>
                <input type="text" id="name" name="name" onChange={(event) => setData(event)} value={fish.name}/>

                <label name="colour"> Colour: </label>
                <input type="color" id="colour" name="colour" onChange={(event) => setData(event)}/>

                <label name="fins"> Number of Fins: </label>
                <input type="number" id="fins" name="fins" onChange={(event) => setData(event)}/>

                <label name="diet"> Diet: </label>
                <input type="text" id="diet" name="diet" onChange={(event) => setData(event)}/>

                <button type="button" onClick={addFish}> Click me to addFish to array </button>

            </form>
            <Fish data={fish}/>
            {/* Rendering our array of objects */}
            {
                // .map() lets us return something from an array
                // fishObj is our fish data in our array, key is just an index number
                fishArray.map((fishObj, key) => {
                    return (<Fish data={fishObj} key={key}/> )
                })
            }

        </>
     );
}
 
export default Aquarium;