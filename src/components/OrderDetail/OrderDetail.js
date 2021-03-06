import React from 'react';
import './OrderDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const OrderDetail = ({ order }) => {
    const handleRemove = () => {
        fetch(`https://apple-cupcake-46761.herokuapp.com/orders/deleteBeverage/${order._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('One beverage deleted.')
            })
    }
    console.log(order)
    const { email, beverageName, beveragePrice, beverageImage, orderTime } = order;
    return (
        <div className="col-md-8 order-container d-flex">


            <div className="order-image">
                <img src={beverageImage} alt="" />
            </div>
            <div className="order-text">
                <div>
                    <h3>Beverage Name: {beverageName}</h3>
                    <h3>Price: {beveragePrice}</h3>
                    <p>Time of order: {orderTime}</p>
                    <button className="btn btn-success" onClick={handleRemove}><FontAwesomeIcon icon={faTrashAlt} /> Remove</button>
                </div>
            </div>

        </div>


    );
};

export default OrderDetail;