import PizzaOrder from "./PizzaOrder";
import {useState} from 'react';

const PizzaForm = () => {

    const [pizzaData, setPizzaData] = useState({});

    // Add my method to set the data
    const setData = (event) => {
        const {name, value} = event.target;

        setPizzaData((prevValue) => ({
           ...prevValue, 
           [name]: value,
        }))
    };

    // In HTML you SHOULDN't duplicate IDs, they should ALWAYS be unique

    return ( 
        <>
            <input type="text" name="type" onChange={(event) => setData(event)}/>
            <input type="number" name="size" onChange={(event) => setData(event)}/>
            <input type="text" name="customer" onChange={(event) => setData(event)}/>
            <input type="radio" name="stuffedCrust" value={true} onChange={(event) => setData(event)}/> True
            <input type="radio" name="stuffedCrust" value={false} onChange={(event) => setData(event)}/> False
            <PizzaOrder data={pizzaData}/>
        </>
     );
}
 
export default PizzaForm;