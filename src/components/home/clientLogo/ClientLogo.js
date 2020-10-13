import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './ClientLogo.css';

const ClientLogo = () => {
    return (
        <section className="w-75 pt-5 m-auto">
            <div className="row d-flex justify-content-around py-5 m-5 client_logo">
                <img src={slack} alt="slack logo" />
                <img src={google} alt="google logo" />
                <img src={uber} alt="uber logo" />
                <img src={netflix} alt="netflix logo" />
                <img src={airbnb} alt="airbnb logo" />
            </div>
        </section>
    );
};

export default ClientLogo;