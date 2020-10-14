import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetails from '../serviceDetails/ServiceDetails';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(data =>setServices(data))
        .catch(err =>console.log(err))
    }, []);

    return (
        <section className="mt-5 text-center">
            <h2>Provide awesome <span style={{color:'#7AB259'}}>services</span></h2>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-3 pt-5">
                    {
                        services.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;