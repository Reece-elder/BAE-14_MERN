const Fish = ({data}) => {

    const {name, colour, fins, diet} = data;

    return ( 
    <>
        <h2> Name: {name} </h2>
        <h3> Colour: {colour} </h3>
        <h3> Number of Fins: {fins} </h3>
        <h3> Diet: {diet}</h3>
    </> 
    );
}
 
export default Fish;