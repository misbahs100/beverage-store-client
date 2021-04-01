import React from 'react';
import './OrderDetail.css';

const OrderDetail = ({order}) => {
    console.log(order)
    const {email, beverageName, beveragePrice, beverageImage, orderTime} = order;
    return (
        <div className="col-md-8 order-container d-flex">
            <div className="order-image">
                <img src={beverageImage} alt=""/>
            </div>
            <div className="order-text">
                <h3>Beverage Name: {beverageName}</h3>
                <h3>Price: {beveragePrice}</h3>
                <p>Time of order: {orderTime}</p>
                <button className="btn btn-success">Remove</button>
            </div>
        </div>
    );
};

export default OrderDetail;