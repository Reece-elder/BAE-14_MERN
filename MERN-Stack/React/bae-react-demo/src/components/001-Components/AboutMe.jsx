const AboutMe = () => {

    // Const - Constant, this cannot be changed (value or data type)
    const name = "Reece";

    // let you can change the data type and the value
    let favColour = "Purple";
    const favPizza = "Hawaiian";
    const currentDate = new Date();

    if(favColour == "Purple"){
        // do something
    }

    // Anything that is in my return() will be returned by this component
    return(
        <>
            <h2> Hello everyone, this info is about me! </h2>
            
            {/* When putting JS into your HTML, use {} to break out of HTML */}
            <h4> My name is {name} </h4>
            <h5> My fav number is {32 + 4} </h5>
            <h5> The current date is {currentDate.toLocaleDateString()} </h5>
        </>
    )

}

export default AboutMe;