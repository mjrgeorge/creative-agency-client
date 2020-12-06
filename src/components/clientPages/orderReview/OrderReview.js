import React, { useContext, useState } from 'react';
import ClientPages from '../ClientPages';
import { useEffect } from 'react';
import { UserContext } from '../../../App';

const OrderReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderedService, setOrderedService] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-plains-00166.herokuapp.com/orderedService?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => setOrderedService(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="container bg-light">
            <div className="row">
                <ClientPages />
                <section className="col-md-10">
                <div className="d-flex justify-content-end pt-3 pr-3">
                        <p>{loggedInUser.name}</p>
                        <img style={{ width: '30px', height: '30px' }} className="rounded-circle ml-3" src={loggedInUser.photo} alt="User" />
                    </div>
                    <h3 className="ml-5 pl-4 pb-5">Order Review</h3>
                    <div className="row">
                        {
                            orderedService.map(ordered =>
                                <div className="col-md-6">
                                    <div className="services_card p-4">
                                        <div className="d-flex justify-content-between">
                                            <img className="mx-3 img-fluid rounded" style={{ height: '50px' }} src={`data:image/png;base64,${ordered.image.img}`} alt="img" />
                                            <button 
                                            className={
                                                ordered.status=="Pending" 
                                                ?"btn btn-danger"
                                                :ordered.status=="On Going" 
                                                ?"btn btn-warning"
                                                :ordered.status=="Done" 
                                                ?"btn btn-success"
                                                :"btn btn-light"
                                            }>
                                            {ordered.status}
                                            </button>
                                        </div>
                                        <h5 className="mt-3 mb-3">{ordered.service}</h5>
                                        <p className="text-secondary">{ordered.details}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OrderReview;