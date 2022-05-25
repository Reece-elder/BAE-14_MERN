const Form = ({setText}) => {

    return ( 
        <input type="text" onChange={(event) => setText(event.target.value)}/>
     );
}
 
export default Form;