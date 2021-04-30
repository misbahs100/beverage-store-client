import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetail from '../OrderDetail/OrderDetail';
import gif from '../../images/giphy-8.gif';


const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://apple-cupcake-46761.herokuapp.com/orders/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            }) 
    }, [loggedInUser.email])
    
    return (
        <div className="container">
            <h2 className="text-center mt-5 text-white">Hello {loggedInUser.name}, You have ordered {orders.length} beverages.</h2>
            {
                orders.length === 0 && <div className="loading-spinner"><img src={gif} alt="" /></div>
            }
            <div className="row">
                {
                    orders.map(order => <OrderDetail order={order}></OrderDetail>)
                }
            </div>
        </div>
    );
};

export default Orders;