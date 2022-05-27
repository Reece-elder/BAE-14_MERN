import axios from 'axios';
const Beer = ({data}) => {

    const {id, name, abv, image_url, food_pairing} = data;

    // Add a delete button to our beer objects, this delete method will delete something of a specific id 

    const deleteObj = () => {
        axios.delete(`https://reqres.in/api/users/${id}`).then((response) => console.log(response));
    }

    return ( 
        <>
            <h2> Name: {name}</h2>
            <img src={image_url} alt={name} height="200px" />
            <h3> ABV: {abv} </h3>
            <ol>
            {
                food_pairing.map((food) => {
                    return (<li> {food} </li>)
                })
            } 
            </ol>
            <button type='button' onClick={deleteObj}> Delete this ID! </button>

        </>
     );
}
 
export default Beer;