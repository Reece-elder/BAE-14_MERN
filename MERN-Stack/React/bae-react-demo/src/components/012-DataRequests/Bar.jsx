import {useState, useEffect} from 'react';
import axios from 'axios';
import Beer from './Beer';

const Bar = () => {

    // State
    const [beerList, setBeerList] = useState([]); 
    const [loaded, setLoaded] = useState(false); 
    // const [fetch, setFetch] = useState(true); 

    // UseEffect
    useEffect(() => {
        setTimeout(() => {
            // axios.get(URL we are searching for) - axios will return a promise (data to be fulfilled)
            axios.get("https://api.punkapi.com/v2/beers") 
            // .then() - whatever the previous function returns, chuck it in here and do this with it
            .then((response) => {
                console.log(response.data); // Check what the data looks like, to see *how* to set it
                setBeerList(response.data);
            
                // Once the state for beerList has been set, we can setLoaded(true)
                setLoaded(true);
            });
        }, 2000)
    },[]);


    // Check if our code has loaded or not, if the request hasn't loaded tell the user it is coming 

    if(loaded){
        return ( 
            <div>
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