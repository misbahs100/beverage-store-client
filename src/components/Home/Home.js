import React, { useEffect, useState } from 'react';
import Beverage from '../Beverage/Beverage';
import gif from '../../images/giphy-4.gif';
import './Home.css';

const Home = () => {
    const [beverages, setBeverages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/beverages')
        .then(res => res.json())
        .then(data => setBeverages(data))
    }, [])
    return (
        <div className="container home">
            {
                beverages.length === 0 && <div className="loading-spinner"><img src={gif} alt=""/></div> 
            }
            <div className="row">
            {
                beverages.map(beverage => <Beverage beverage={beverage}></Beverage>)
            }
        </div>
        </div>
    );
};

export default Home;