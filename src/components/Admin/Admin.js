import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

    return (
        <div className="container">      
            {/* <div>
            <Link><button className="btn">Manage Beverage</button> </Link>
            <br/>
            <Link to="/addBeverage"><button className="btn">Add Beverage</button> </Link>
            <br/>
            <Link><button className="btn">Edit Beverage</button> </Link>
            </div> */}

            <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <Link><button className="btn">Manage Beverage</button> </Link>
            <Link to="/addBeverage"><button className="btn">Add Beverage</button> </Link>
            <Link><button className="btn">Edit Beverage</button> </Link>
            {/* <a href="#">Contact</a> */}
            </div>

            {/* <p style={{font-size:30px;cursor:pointer}}" onClick={openNav}>&#9776; open</p> */}
            <p style={{fontSize:'30px', cursor:'pointer'}} onClick={openNav}>&#9776; Open</p>
            

        </div>
    );
};

export default Admin;