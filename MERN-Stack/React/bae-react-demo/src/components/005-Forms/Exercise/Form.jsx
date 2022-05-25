import {useState} from 'react';
import Pet from './Pet';
const Form = () => {

    // What state did you use?
    // Making each value into a separate state 
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");

    // Make our state into an object 
    // Objects (within JS) are collections of ANY data
    const petObj = {
        name : "zaph",
        number : "74937207337",
        address: "Newport",
        image : "some-image.png",
        cute : true
    };
    
    // {}     - Empty Object
    // petObj - existing / default object
    // null   - null field
    const [petData, setPetData] = useState({})

    // Some type of function, that lets us update one attribute of the object and keep the other options

    // Our Function takes in an event
    const setData = (event) => {
        // pull the name and value attributes out of our event.target
        const {id, value} = event.target;

        setPetData((prevValue) => ({ // Taking the current value of setPetData and allowing JS to modify it
           ...prevValue,             // ... spread operator, ignore all of the previous attributes
           [id]: value,              // Set the key to be the input field name (name, number, address) : value 
                                     // number: "40478232839" - either going to put it at the end OR update the original number
        }))
    };

    return ( 
        <>
            <input type="text" id='name' name="name" onChange={(event) => {setData(event)}}/>
            <input type="text" id='number' name="number" onChange={(event) => {setData(event)}}/>
            <input type="text" id='address' name="address" onChange={(event) => {setData(event)}}/>
            <input type="text" id='image' name="image" onChange={(event) => {setData(event)}}/>
            <input type="text" id='cute' name="cute" onChange={(event) => {setData(event)}}/>
            <button type='text' onClick={() => console.log(petData)}> Click me to print the data! </button>
            {/* <Pet name={petData.name} number={petData.number} address={petData.address} image={petData.image} cute={true}/> */}
            {/* Passing all of our data as a single object rather than individual states */}
            <Pet data={petData}/>
        </>
     );
}
 
export default Form;