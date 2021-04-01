import React, { useEffect, useState } from 'react';
import SideNav from '../SideNav/SideNav';
import './ManageBeverage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageBeverage = () => {
    const [beverages, setBeverages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/beverages')
        .then(res => res.json())
        .then(data => {
            setBeverages(data);
            console.log(data)
        })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5055/beverages/deleteBeverage/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('One beverage deleted.')
        })
    }
    return (
        <div className="d-flex">
            <SideNav></SideNav>

            <div className="manageBeverage">
                <h1 className="mt-5 ml-5">Manage Product</h1>
                <div className="ml-5">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Beverage Id</th>
                                <th scope="col">Beverage Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                    beverages.map(beverage =>  <tr>
                                        <th scope="row">{beverage._id}</th>
                                        <td>{beverage.name}</td>
                                        <td>{beverage.price}</td>
                                        <td>
                                            <button style={{color: 'green'}} className="btn"><FontAwesomeIcon icon={faPen} /></button>
                                            <button style={{color: 'red'}} className="btn" onClick={ () => handleDelete(beverage._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        </td>
                                      </tr>)
                                }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBeverage;