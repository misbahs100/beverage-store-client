import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [beverage, setBeverage] = useState({});
    useEffect(() => {
        fetch(`https://apple-cupcake-46761.herokuapp.com/beverage/${id}`)
        .then(res => res.json())
        .then(data => setBeverage(data))
    }, [])

    const order = {
        email: loggedInUser.email,
        beverageName: beverage.name,
        beveragePrice: beverage.price,
        beverageImage: beverage.imageURL,
        orderTime: new Date().toDateString()        
    }
    

    const handleOrder = () => {
        fetch('https://apple-cupcake-46761.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => {
            
            console.log('server side: ', res);
            
        })
        alert('Beverage ordered Successfully.')
    }

    console.log(beverage);
    const {_id, name, imageURL, price} = beverage;

    return (
        <div className="container">
            <h1 className="mt-5 text-white">Checkout</h1>
            <div className="checkout-container bg-dark">
                <table className="table table-dark">
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
            <button className="btn btn-success checkoutBtn" onClick={handleOrder}>Checkout</button>
        </div>
    );
};

export default Checkout;