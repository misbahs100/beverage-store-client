import React from 'react';
import './OrderDetail.css';

const OrderDetail = ({order}) => {
    const handleRemove = () => {
        fetch(`http://localhost:5055/deleteBeverage/${order._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('One beverage deleted.')
        })
    }
    console.log(order)
    const {email, beverageName, beveragePrice, beverageImage, orderTime} = order;
    return (
        <div  id="dd" className="col-md-8 order-container d-flex">
            
            <div  className="order-image">
                <img src={beverageImage} alt=""/>
            </div>
            <div className="order-text">
                <h3>Beverage Name: {beverageName}</h3>
                <h3>Price: {beveragePrice}</h3>
                <p>Time of order: {orderTime}</p>
                <button className="btn btn-success" onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
};

export default OrderDetail;