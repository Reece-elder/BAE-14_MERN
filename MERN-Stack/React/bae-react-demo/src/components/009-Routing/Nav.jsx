import {Link} from 'react-router-dom'

const Nav = () => {
    return ( 
        <div>
            <h3>Nav </h3> 
            {/* A way to access my about page <a href="/about"/> */}
            <Link to="/about">
                <h4> About </h4>
            </Link>
            <Link to="/shop">
                <button type='button'> Shop </button>
            </Link>
            <Link to="/">
                <img src='https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png' alt='home' width="100px" height="100px"/>
            </Link>
        </div>

    );
}
 
export default Nav;