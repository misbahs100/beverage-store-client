import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/home">Beverage Store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/home" class="nav-link active">Home</Link>
                            <Link to="/orders" class="nav-link active">Orders</Link>
                            <Link to="/admin" class="nav-link active">Admin</Link>
                            <Link to="/about" class="nav-link active">About</Link>
                            <Link to="/login" class="nav-link active">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;