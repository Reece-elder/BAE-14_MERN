import { useState } from "react";

const PrintText = () => {

    // State for some text 
    const [text, setText] = useState("");

    // Exercise - Using your contact card pet exercise, 
    // use state to add a new contact card with input fields
    // not expecting you to pass state as a prop to anything

    // Stretch goal - Use a manager component and a form component, pass state from manager to form
    // Pass the values from manager to the contact card renderer 

    return ( 
        <>
            {/* HTML to create a text input field */}
            {/* When the input field detects a change (key press).. do this thing */}
            {/* OnChange creates an Event, data about what change occured */}
            <input type="text" id="demo1" onChange={(event) => setText(event.target.value)} />
            <h2> Current value of text is {text} </h2>
            
        </>
     );
}
 
export default PrintText;