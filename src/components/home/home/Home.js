import React from 'react';
import ClientLogo from '../clientLogo/ClientLogo';
import Contact from '../contact/Contact';
import FeedBacks from '../feedBacks/FeedBacks';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import OurWorks from '../ourWorks/OurWorks';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <ClientLogo/>
            <Services/>
            <OurWorks/>
            <FeedBacks/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;