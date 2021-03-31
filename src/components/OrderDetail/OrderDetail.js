import React from 'react';
import './OrderDetail.css';

const OrderDetail = ({order}) => {
    console.log(order)
    const {email, beverageName, beveragePrice, beverageImage} = order;
    return (
        <div className="col-md-10 order-container d-flex">
            <div className="order-image">
                <img src={beverageImage} alt=""/>
            </div>
            <div className="order-text">
                <h3>{beverageName}</h3>
            </div>
        </div>
    );
};

export default OrderDetail;