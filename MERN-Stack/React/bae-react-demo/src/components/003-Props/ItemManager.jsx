import Item from "./Item";

/* Exercise - Create a contact card book of pets 
 Pet Component which should render the following info: 
 Name, phone number, address, image, cute or not (boolean)
 ContactCardManager component to render the Pets 
*/ 

const ItemManager = () => {
    return ( 
        <>
            <Item name="pumpkin" image="pumpkin-image.jpg" cost={12.23}/>
            <Item name="Espresso Machine" image="coffee-machine.png" cost={192.91}/>
        </>
     );
}
 
export default ItemManager;