import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import AdminPages from '../AdminPages';
import loading from '../../../images/loading.gif';

const ServicesList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-beach-35378.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err))
    }, []);
    console.log(orders);

    return (
        <div className="container bg-light">
            <div className="row">
                <AdminPages />
                <div className="col-md-10">
                    <div className="d-flex justify-content-end pt-3 pr-3">
                        <p>{loggedInUser.name}</p>
                        <img style={{ width: '30px', height: '30px' }} className="rounded-circle ml-3" src={loggedInUser.photo} alt="User" />
                    </div>
                    <h3 className="ml-5 pl-5 pb-5">Services List</h3>
                    {
                        orders.length===0 ?
                        <div>
                            <img className="rounded mx-auto d-block p-5" src={loading} alt="Loading..."/>
                        </div>
                        :
                        <div className="bg-white p-4 rounded">
                        <div className="table-responsive-sm">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Services</th>
                                        <th scope="col">Project Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                {
                                    orders.map(order =>
                                        <tbody key={order._id}>
                                            <tr>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td>{order.service}</td>
                                                <td>{order.details}</td>
                                                <td>Dropdown</td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                            </table>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesList;