import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import ServicesList from '../adminPages/servicesList/ServicesList';
import ClientOrder from '../clientPages/clientOrder/ClientOrder';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // useEffect(()=>{
    //     fetch(``)
    // }, []);
    return (
        <div>
            <ServicesList/>
            <ClientOrder/>
        </div>
    );
};

export default Dashboard;