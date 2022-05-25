// StateManagerTwo is the parent component
// It will contain bool and setBool
// It will render DisplayTwo(bool) and BooleanToggle(setBool)

import {useState} from 'react';
import BooleanToggle from './BooleanToggle';
import Calculator from './Calculator';
import DisplayTwo from './DisplayTwo';

const StateManagerTwo = () => {

// Create my state - const [nameOfState, setNameOfState] 
// The default value of my state is true
// Its starting value is 'boolean' 
const [bool, setBool] = useState(true);
const [calValue, setCalValue] = useState(0);
// Creating a component that lets us add 1 to our value 


// setBool() is a function, so it requires ()
// When a state is set, the app re runs.. causing an infinite loop
// setBool(false);

// This will ONLY run when it is called
const toggleBoolean = () => {
    if(bool === true){
        setBool("This is now a String");
    } else {
        setBool(true);
    };
}


    return ( 
        <nav>
            {/* <h2> The value of bool is {bool.toString()} </h2> */}
            <BooleanToggle toggleBoolean={toggleBoolean}/>
            <Calculator setCalValue={setCalValue}/>
            <DisplayTwo bool={bool} calValue={calValue}/>
            {/* <button type='button' onClick={toggleBoolean}> Click me to toggle! </button> */}
        </nav>
        
        );
}
 
export default StateManagerTwo;