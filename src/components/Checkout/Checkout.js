import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [beverage, setBeverage] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5055/beverage/${id}`)
        .then(res => res.json())
        .then(data => setBeverage(data))
    }, [])

    const order = {
        email: loggedInUser.email,
        beverageName: beverage.name,
        beveragePrice: beverage.price,
        beverageImage: beverage.imageURL
    }

    const handleOrder = () => {
        fetch('http://localhost:5055/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => {
            console.log('server side: ', res);
        })
    }

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
            <button className="btn btn-success" onClick={handleOrder}>Checkout</button>
        </div>
    );
};

export default Checkout;