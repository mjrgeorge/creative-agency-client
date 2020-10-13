import React from 'react';
import AdminPages from '../AdminPages';

const ServicesList = () => {
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
                        <div className="row mb-3 p-2">
                            <div className="col-md-2"><p>Jubayer Rahman</p></div>
                            <div className="col-md-3"><p>mjrgeorge@gmail.com</p></div>
                            <div className="col-md-2"><p>Web Developer</p></div>
                            <div className="col-md-3"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, laborum.</p></div>
                            <div className="col-md-2">
                                <div class="dropdown">
                                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown button
                                </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Done</a>
                                        <a class="dropdown-item" href="#">Ongoing</a>
                                        <a class="dropdown-item" href="#">Pending</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesList;