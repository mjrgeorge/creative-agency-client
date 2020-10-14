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
    console.log({services});

    // const serviceData = [
    //     {
    //         name: 'Web & Mobile design',
    //         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
    //         img: service1
    //     },
    //     {
    //         name: 'Graphic design',
    //         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    //         img: service2
    //     },
    //     {
    //         name: 'Web development',
    //         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    //         img: service3
    //     }
    // ]

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