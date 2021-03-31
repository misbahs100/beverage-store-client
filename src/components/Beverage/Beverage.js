import React from 'react';
import { Link } from 'react-router-dom';

const Beverage = ({beverage}) => {
    console.log(beverage)
    return (
        <div className="col-md-3">
            <div className="d-flex justify-content-center">
                <Link to={`beverage/${beverage._id}`}>
                <img style={{height: '200px', marginTop: '20px'}} src={beverage.imageURL} alt=""/>
                </Link>
            </div>
            <h3 className="text-center">{beverage.name}</h3>
        </div>
    );
};

export default Beverage;