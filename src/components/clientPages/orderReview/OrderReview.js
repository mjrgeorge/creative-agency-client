import React, { useContext, useState } from 'react';
import ClientPages from '../ClientPages';
import { useEffect } from 'react';
import { UserContext } from '../../../App';

const OrderReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderedService, setOrderedService] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-beach-35378.herokuapp.com/orderedService?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => setOrderedService(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="container bg-light">
            <div className="row">
                <ClientPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Order Review</h3>
                    <div className="row">
                        {
                            orderedService.map(ordered =>
                                <div className="col-md-6">
                                    <div className="services_card p-4">
                                        <div className="d-flex justify-content-between">
                                            <img className="mx-3 rounded-circle" style={{ height: '50px' }} src={`data:image/png;base64,${ordered.image.img}`} alt="img" />
                                            <button className="btn btn-danger btn-sm">Pending</button>
                                        </div>
                                        <h5 className="mt-3 mb-3">{ordered.service}</h5>
                                        <p className="text-secondary">{ordered.details}</p>
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

export default OrderReview;