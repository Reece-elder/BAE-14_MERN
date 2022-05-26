const PizzaOrder = ({data}) => {
    const {type, size, customer, stuffedCrust} = data;
    return ( 
        <>
            <h2> Pizza type: {type} </h2>
            <h2> Pizza size: {size} </h2>
            <h2> Pizza customer: {customer} </h2>
            <h2> Stuffed Crust: {stuffedCrust} </h2>
        </>
     );
}
 
export default PizzaOrder;