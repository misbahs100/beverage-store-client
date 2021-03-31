import React, { useEffect, useState } from 'react';
import Beverage from '../Beverage/Beverage';

const Home = () => {
    const [beverages, setBeverages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/beverages')
        .then(res => res.json())
        .then(data => setBeverages(data))
    }, [])
    return (
        <div className="row">
            {
                beverages.map(beverage => <Beverage beverage={beverage}></Beverage>)
            }
        </div>
    );
};

export default Home;