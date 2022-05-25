// WIll be taking in as a prop one of two things: 
// - Pass in the setBool() useState query and make our own function here
// - Pass in the booleanToggle() we created in our Manager

// props contains my boolean toggle function
const BooleanToggle = (props) => {
    return ( 
        <button type="button" onClick={props.toggleBoolean}> Or.. click me!</button>
     );
}
 
export default BooleanToggle;