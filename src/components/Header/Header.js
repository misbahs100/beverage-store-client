import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import logo from '../../images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light header-text">
                <div class="container-fluid">
                    <Link to="/home" class="navbar-brand text-white navbarLogo" ><img src={logo} alt="" /> BEVERAGE STORE</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/home" class="nav-link active text-white mr-3"><FontAwesomeIcon icon={faHome} /> </Link>
                            <Link to="/orders" class="nav-link active text-white mr-3">Orders</Link>
                            <Link to="/admin" class="nav-link active text-white mr-3">Admin</Link>
                            <Link to="/about" class="nav-link active text-white mr-3">About</Link>
                            {
                                loggedInUser.email
                                    ? <Link to="/login" class="nav-link active text-white">{loggedInUser.name}</Link>
                                    : <Link to="/login" class="nav-link active text-white">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;