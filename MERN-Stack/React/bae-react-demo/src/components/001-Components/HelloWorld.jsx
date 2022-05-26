// This component will be used to add 2 <h2> to our page 

// React uses Node to export modules, each file can export one thing
// This file will be exporting the function HelloWorld

const HelloWorld = () => {
    
    // A function can only ever return one thing
    // My function is returning 2 <h2>s
    // Now my function is returning one div that contains two <h2>'s
    return (
        <> 
            <h2> Hello Everyone! </h2>
            <h2> Hope you're all enjoying React :D </h2>
        </>
        // <> </> - React fragment, doesn't show up in the inspector 
    );

};

// Does look different to Express Node, React uses a slightly different version of Node
// same as: module.exports = HelloWorld 
export default HelloWorld;