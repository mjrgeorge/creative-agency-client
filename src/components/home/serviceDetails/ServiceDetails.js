import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="services_card p-4">
                <img style={{height: '50px'}} src={service.img} alt="img" />
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;