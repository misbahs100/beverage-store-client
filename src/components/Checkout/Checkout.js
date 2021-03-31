import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css';

const Checkout = () => {
    const {id} = useParams();
    const [beverage, setBeverage] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5055/beverage/${id}`)
        .then(res => res.json())
        .then(data => setBeverage(data))
    }, [])
    console.log(beverage);
    const {_id, name, imageURL, price} = beverage;

    return (
        <div className="container">
            <h1 className="mt-5">Checkout</h1>
            <div className="checkout-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Beverage ID</th>
                            <th scope="col">Beverage Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{_id}</th>
                            <td>{name}</td>
                            <td><input type="text" placeholder=" Enter Quantity"/></td>
                            <td>{price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="btn btn-success">Checkout</button>
        </div>
    );
};

export default Checkout;