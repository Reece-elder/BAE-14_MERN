import {useState, useEffect} from 'react';
import axios from 'axios';

const Bar = () => {

    // State
    const [beerList, setBeerList] = useState([]); 
    // const [fetch, setFetch] = useState(true); 

    // UseEffect
    useEffect(() => {
        // axios.get(URL we are searching for) - axios will return a promise (data to be fulfilled)
        axios.get("https://api.punkapi.com/v2/beers") 
        // .then() - whatever the previous function returns, chuck it in here and do this with it
        .then((response) => {
            console.log(response.data); // Check what the data looks like, to see *how* to set it
            setBeerList(response.data);
            console.log(beerList); // This won't look right.. because state is not instant
        });
    },[]);


    return ( 
        <h2> Bar </h2>
        // Rendering Beer components based on the data we pull 
     );
}
 
export default Bar;