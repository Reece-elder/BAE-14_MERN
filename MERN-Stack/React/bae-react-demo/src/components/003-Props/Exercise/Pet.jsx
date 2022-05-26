
// Name, phone number, address, image, cute Or not (boolean)
const Pet = ({name, number, address, image, cute}) => {

    let booleanString;

    if(cute === true){
        booleanString = "cute";
    } else {
        booleanString = "not cute";
    }

    return ( 
        <>
            <h4> Name: {name} </h4>
            <h4> Phone Number: {number} </h4>
            <h4> Address: {address} </h4>
            <img src={image} alt={name}/>
            {/* Ternary Statement, short hand way to return a simple if else */}
            <h4> Cute1: {cute ? "cute" : "ugly" }</h4>
            <h4> Cute2: {booleanString} </h4>
            <h4> Cute3: {cute} </h4>
            <h4> Cute4: {cute.toString()} </h4>
        </>
     );
}
 
export default Pet;