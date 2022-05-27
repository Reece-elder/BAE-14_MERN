import {useEffect, useState} from 'react';
const Clock = () => {

    // Make State for the current time (time can change)
    // What commands can we use to get current time
    // Depending on your computers date time environment variables, return an appropriate time
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // *should* cause an infinite loop as we're changing state directly 
    // setTime(new Date().toLocaleTimeString());
    // Add some kind of logic as to when we should rerender

    // UseEffect takes in a function, when to run this
    // Whenever a rerender (page loading, state changing etc) do this thing
    useEffect(() => {
        // setTimeout - runs a command after x milliseconds
        setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000)
    },[time]) 
    // Empty [] this runs once (at the beginning and never again)
    // Within the [] put state, when this state changes run set timeout


    return ( 
        <h4> {time} </h4>
     );
}
 
export default Clock;