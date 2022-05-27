import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
    <>
        <h3> Cool Nav Bar! </h3>
        {/* We have to specify where the link is going to - to = "/home" */}
        <Link to="/home"> 
            <h4> Home </h4> 
        </Link>
        
        <Link to="/about"> 
            <h4> About </h4> 
        </Link>

        <Link to="/shop"> 
            <h4> Shop </h4> 
        </Link>
    </>
    );
}
 
export default NavBar;