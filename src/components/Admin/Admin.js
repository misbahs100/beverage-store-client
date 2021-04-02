import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import './Admin.css';

const Admin = () => {
    return (
        <div className="d-flex">
            <SideNav></SideNav>
            <h1 className="mt-5 ml-5 text-white ">Please select any option from left menu.</h1>
        </div>
    );
};

export default Admin;