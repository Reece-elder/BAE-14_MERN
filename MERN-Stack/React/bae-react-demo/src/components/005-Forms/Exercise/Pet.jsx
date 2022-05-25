// We're not passing in props which is made up of attributes props -> name
// props -> data -> name
const Pet = ({data}) => {
const {name, number, address, image, cute} = data;


    return ( 
    <>
        <h2> Name: {name} </h2>
        <h2> Phone Number: {number} </h2>
        <h2> Address: {address} </h2>
        <img src={image} alt={name}/>
        <h2> Cute: {cute} </h2>
    </> 
    );
}
 
export default Pet;