import React, { useEffect, useState } from 'react';
import Beverage from '../Beverage/Beverage';
import gif from '../../images/giphy-8.gif';
import './Home.css';


const Home = () => {
    const [beverages, setBeverages] = useState([]);

    useEffect(() => {
        fetch('https://apple-cupcake-46761.herokuapp.com/beverages')
            .then(res => res.json())
            .then(data => setBeverages(data))
    }, [])
    return (
        <div className="container home mt-5">

            {
                beverages.length === 0 && <div className="loading-spinner"><img src={gif} alt="" /></div>
            }

            <div className="row">
                <div class="container page-wrapper">
                    <div class="page-inner">
                        <div class="row">
                            {
                                beverages.map(beverage => <Beverage beverage={beverage}></Beverage>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;