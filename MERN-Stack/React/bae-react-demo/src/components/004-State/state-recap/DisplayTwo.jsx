// Destructuring props into its values, and grabbing the value 'bool'
const DisplayTwo = ({bool, calValue}) => {
    return ( 
        <h2> Current value of bool is {bool.toString()} and value of Calculator is {calValue} </h2>
     );
}
 
export default DisplayTwo;