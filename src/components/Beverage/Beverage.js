import React from 'react';
import { Link } from 'react-router-dom';
import './Beverage.css';

const Beverage = ({beverage}) => {
    console.log(beverage)
    return (
        <div className="col-md-4  d-flex justify-content-center">
            <div className="beverage-container">
                
                <div className=" d-flex justify-content-center"><img  style={{height: '150px', width: '200px', marginTop: '20px'}} src={beverage.imageURL} alt=""/></div>
                
                <h3 className="text-center">{beverage.name}</h3>
                <div className="d-flex justify-content-between p-2">
                  <h3 className="text-primary">{beverage.price}</h3>
                  <Link to={`checkout/${beverage._id}`}>
                  <button className="btn btn-primary beverage-btn">Buy</button>
                  </Link>
                </div>
                
            </div>
            
            
        </div>
    );
};

export default Beverage;