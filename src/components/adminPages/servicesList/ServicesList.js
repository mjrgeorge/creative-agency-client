import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import AdminPages from '../AdminPages';
import loading from '../../../images/loading.gif';

const ServicesList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [selectOrder, setSelectOrder] = useState({})
    useEffect(() => {
        fetch('https://afternoon-plains-00166.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err))
    }, [orders]);

    const updateStatus = (status) => {
        const data = { _id: selectOrder._id, status };
        fetch(
            `https://afternoon-plains-00166.herokuapp.com/updateOrderStatus/${data._id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("Update Successfully Completed")
                }
            });
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <AdminPages />
                <section className="col-md-10">
                    <div className="d-flex justify-content-end pt-3 pr-3">
                        <p>{loggedInUser.name}</p>
                        <img style={{ width: '30px', height: '30px' }} className="rounded-circle ml-3" src={loggedInUser.photo} alt="User" />
                    </div>
                    <h3 className="ml-5 pl-5 pb-5">Services List</h3>
                    {
                        orders.length === 0 ?
                            <div>
                                <img className="rounded mx-auto d-block p-5" src={loading} alt="Loading..." />
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
                                                        <td>
                                                            <select
                                                                onClick={() => setSelectOrder(order)}
                                                                onChange={(e) => updateStatus(e.target.value)}
                                                                className={
                                                                    order.status=="Pending" 
                                                                    ?"btn btn-danger"
                                                                    :order.status=="On Going" 
                                                                    ?"btn btn-warning"
                                                                    :order.status=="Done" 
                                                                    ?"btn btn-success"
                                                                    :"btn btn-light"
                                                                }
                                                            >
                                                                <option selected={order.status == "Pending"} className="bg-white text-dark">Pending</option>
                                                                <option selected={order.status == "On Going"} className="bg-white text-dark">On Going</option>
                                                                <option selected={order.status == "Done"} className="bg-white text-dark">Done</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        }
                                    </table>
                                </div>
                            </div>
                    }
                </section>
            </div>
        </div>
    );
};

export default ServicesList;