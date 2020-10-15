import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminPages from '../AdminPages';

const ServicesList = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-beach-35378.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="container bg-light">
            <div className="row">
                <AdminPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Service List</h3>
                    <div className="bg-white p-5 rounded">
                        <div className="row bg-light mb-3 p-2">
                            <div className="col-md-2"><h5>Name</h5></div>
                            <div className="col-md-3"><h5>Email ID</h5></div>
                            <div className="col-md-2"><h5>Services</h5></div>
                            <div className="col-md-3"><h5>Project Details</h5></div>
                            <div className="col-md-2"><h5>Status</h5></div>
                        </div>
                        {
                            orders.map(order =>
                                <div className="row mb-3 p-2" key={order._id}>
                                    <div className="col-md-2"><p>{order.name}</p></div>
                                    <div className="col-md-3"><p>{order.email}</p></div>
                                    <div className="col-md-2"><p>{order.service}</p></div>
                                    <div className="col-md-3"><p>{order.details}</p></div>
                                    <div className="col-md-2">
                                        <div class="dropdown">
                                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown button
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link class="dropdown-item" to="#">Done</Link>
                                                <Link class="dropdown-item" to="#">Ongoing</Link>
                                                <Link class="dropdown-item" to="#">Pending</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesList;