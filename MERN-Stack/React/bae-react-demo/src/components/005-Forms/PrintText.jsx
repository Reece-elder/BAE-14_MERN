import { useState } from "react";

const PrintText = () => {

    // State for some text 
    const [text, setText] = useState("");

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