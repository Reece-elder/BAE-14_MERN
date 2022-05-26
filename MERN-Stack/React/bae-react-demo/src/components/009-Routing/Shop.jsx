import {useParams} from "react-router-dom";

const Shop = () => {

    // Will pull the id out of the URL
    const {id} = useParams();

    return (
        <h2> Shop page of id: {id} </h2>
    )

}

export default Shop;