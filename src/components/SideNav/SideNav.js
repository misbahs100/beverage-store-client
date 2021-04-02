import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'

const SideNav = () => {
    return (
        <div className="sideNav">
            <div className="mt-5">
                <Link to="/manageBeverage"><button className="btn"><FontAwesomeIcon icon={faTasks} /> Manage Beverage</button></Link>
                <br />
                <Link to="/addBeverage"><button className="btn"><FontAwesomeIcon icon={faPlus} /> Add Beverage</button> </Link>
                <br />
                <Link><button className="btn"><FontAwesomeIcon icon={faEdit} /> Edit Beverage</button> </Link>
            </div>
        </div>
    );
};

export default SideNav;