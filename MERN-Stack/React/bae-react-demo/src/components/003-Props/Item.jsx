// Item will display the name, image and cost
const Item = ({name, image, cost}) => {
    // I now have the variables name, image and cost to play with
    // Destructured from the props data 

    return ( 
        <>
            <h4> Item name: {name} </h4>
            <img src={image} alt={name} />
            <h5> Cost: {cost} </h5>
        </>
     );
}
 
export default Item;