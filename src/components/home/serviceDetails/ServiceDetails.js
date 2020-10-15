import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
import { useSpring, animated } from 'react-spring'

const ServiceDetails = ({ service }) => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        transition: '2s'
    })

    return (
        <div className="col-lg-4 my-3 text-center">
            <Link to={`/clientOrder/${service.service}`} className="text-decoration-none">
                <animated.p style={props}>
                    <div className="services_card p-4">
                        <img className="rounded-circle" style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="img" />
                        <h5 className="mt-3 mb-3">{service.service}</h5>
                        <p className="text-secondary">{service.description}</p>
                    </div>
                </animated.p>
            </Link>
        </div>
    );
};

export default ServiceDetails;