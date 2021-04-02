import React from 'react';
import { Link } from 'react-router-dom';
import './Beverage.css';

const Beverage = ({ beverage }) => {
    console.log(beverage)
    return (
        <div class="el-wrapper">
            <div class="box-up">
                <img class="img" src={beverage.imageURL} alt="" />
                <div class="img-info">
                    <div class="info-inner">
                        <span class="p-name">{beverage.name}</span>
                        <span class="p-company">name is oscar bro</span>
                    </div>
                    <div class="a-size">Available at : <span class="size">Full Country</span></div>
                </div>
            </div>

            <div class="box-down">
                <div class="h-bg">
                    <div class="h-bg-inner"></div>
                </div>


                <Link to={`checkout/${beverage._id}`}>
                    <button class="cart btn" >
                        <span class="price">{beverage.price}</span>
                        <span class="add-to-cart">
                            <span class="txt">Add in order</span>
                        </span>
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Beverage;