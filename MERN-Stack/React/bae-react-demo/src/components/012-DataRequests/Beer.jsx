const Beer = ({data}) => {

    const {name, abv, image_url, food_pairing} = data;

    return ( 
        <>
            <h2> Name: {name}</h2>
            <img src={image_url} alt={name} width="200px" />
            <h3> ABV: {abv} </h3>
            <ol>
            {
                food_pairing.map((food) => {
                    return (<li> {food} </li>)
                })
            } 
            </ol>

        </>
     );
}
 
export default Beer;