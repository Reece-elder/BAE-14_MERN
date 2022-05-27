import { useParams } from "react-router-dom";

const Shop = () => {

    // 
    const {itemId} = useParams();
    console.log(itemId);

    return ( 
        // How can I print my itemID in my h2? 
        <h2> This is the shop page! ItemID: {itemId} </h2> 
    );
}
 
export default Shop;