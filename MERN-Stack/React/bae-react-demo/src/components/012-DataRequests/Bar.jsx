import {useState, useEffect} from 'react';
import axios from 'axios';
import Beer from './Beer';

const Bar = () => {

    // State
    const [beerList, setBeerList] = useState([]); 
    const [loaded, setLoaded] = useState(false); 
    // const [fetch, setFetch] = useState(true);
    const [name, setName] = useState("");
    const [job, setJob] = useState(""); 

    // UseEffect
    useEffect(() => {
        setTimeout(getDataAsync, 2000)
    },[]);

    // .then() was used to make JS asynchronous, lets you return a promise and say 
    // "when this function is done.. do this thing" - .then() can get pretty messy 

    // Async and Await fix this problem, by making the code asychrnous without the need for .then()
    // When making an async function, you need to specify it is async

    const getDataAsync = async () => {
        // await - don't move on from this line until this thing is finished
        const data = await axios.get("https://api.punkapi.com/v2/beers");
        console.log(data); // data is undefined.. because we haven't told it to wait for the info
        setBeerList(data); // We won't get here, until the await is finished
        setLoaded(true);
    }

    // This method runs when the page loads, to show the user ALL of the data 
    const getData = () => {
            axios.get("https://api.punkapi.com/v2/beers") 
            // .then() - whatever the previous function returns, chuck it in here and do this with it
            .then((response) => {
                console.log(response.data); // Check what the data looks like, to see *how* to set it
                setBeerList(response.data);
            
                // Once the state for beerList has been set, we can setLoaded(true)
                setLoaded(true);
            });
    }

    // Method to post data, will only post when the user clicks a button
    const postData = () => {
        // When we are posting we need to specify WHAT we are posting
        // add it as a parameter after our url
        axios.post("https://reqres.in/api/users", { // Passing in a new JS Object
            name: name,
            job: job
        }).then((response) => {
            console.log(response);
        });
    }


    // Check if our code has loaded or not, if the request hasn't loaded tell the user it is coming 

    if(loaded){
        return ( 
            <div>
                <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter Name!"/>
                <input type="text" onChange={(event) => setJob(event.target.value)} placeholder="Enter Job!"/>
                <button type='button' onClick={postData}> Click me to post data! </button>
                <h2> Bar </h2>
                {
                    beerList.map((beer) => {
                        return <Beer data={beer}/>
                    })
                }
            </div>
         );
    } else {
        return (<h2> Please wait.. your data is loading.. </h2>)
    }

    
}
 
export default Bar;