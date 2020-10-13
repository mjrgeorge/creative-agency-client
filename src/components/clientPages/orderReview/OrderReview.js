import React from 'react';
import ClientPages from '../ClientPages';
import service3 from '../../../images/icons/service3.png';
import service1 from '../../../images/icons/service1.png';

const OrderReview = () => {
    return (
        <div className="container bg-light">
            <div className="row">
                <ClientPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Order Review</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="services_card p-4">
                                <div className="d-flex justify-content-between">
                                    <img style={{ height: '50px' }} src={service3} alt="service3" />
                                    <button className="btn btn-danger btn-sm">Pending</button>
                                </div>
                                <h5 className="mt-3 mb-3">Web Design</h5>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos ea ipsa ipsam eveniet. Sequi fuga maxime iure aliquam assumenda?</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="services_card p-4">
                                <div className="d-flex justify-content-between">
                                    <img style={{ height: '50px' }} src={service1} alt="service1" />
                                    <button className="btn btn-success btn-sm">Done</button>
                                </div>
                                <h5 className="mt-3 mb-3">Web Design</h5>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos ea ipsa ipsam eveniet. Sequi fuga maxime iure aliquam assumenda?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;