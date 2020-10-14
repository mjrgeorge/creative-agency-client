import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service }) => {
    return (
        <div className="col-lg-4 my-3 text-center">
            <div className="services_card p-4">
                <img style={{height: '50px'}} src={`data:image/png;base64,${service.image.img}`} alt="img" />
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;