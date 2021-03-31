import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetail from '../OrderDetail/OrderDetail';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect( () => {
        fetch(`http://localhost:5055/orders/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            console.log("orders: ",data)
            setOrders(data);
        })
    }, [])
    return (
        <div className="container">
            <div className="row">
            {
                orders.map(order => <OrderDetail order={order}></OrderDetail>)
            }
        </div>
        </div>
    );
};

export default Orders;