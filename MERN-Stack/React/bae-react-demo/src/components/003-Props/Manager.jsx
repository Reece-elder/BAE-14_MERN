import Counter from "./Counter";

const Manager = () => {
    return ( 
        // To send props from one component (parent) to a child, pass them like HTML attributes
        // We can send whatever data we want, doesn't have to be one thing
        <Counter score={12}/>
     );
}
 
export default Manager;