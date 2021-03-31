import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const [spinner, setSpinner] = useState(true);
    return (
        <div className="container">      
            <h2>This is admin</h2>
            <div>
            <Link><button className="btn">Manage Beverage</button> </Link>
            <br/>
            <Link to="/addBeverage"><button className="btn">Add Beverage</button> </Link>
            <br/>
            <Link><button className="btn">Edit Beverage</button> </Link>
            </div>
        </div>
    );
};

export default Admin;