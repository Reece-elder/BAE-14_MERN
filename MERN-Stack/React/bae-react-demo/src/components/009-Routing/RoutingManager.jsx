import {BrowserRouter, Routes, Route} from "react-router-dom";

// BrowserRouter - Parent component 
// Routes        - Collection / array of routes to go down
// Route         - Individual Route (3000/home)
import Home from "./Home";
import Shop from "./Shop";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";

const RoutingManager = () => {
    // Routes and Links are gonna go here!
    return ( 
        <>
        <BrowserRouter>

            {/* Regardless of the route we will render our Nav */}
            <NavBar/>

            <Routes>
                {/* Path - URL path, element - What Component to render */}
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/shop" element={<Shop/>}/>
            </Routes>
        </BrowserRouter>

        </>
     );
}
 
export default RoutingManager;