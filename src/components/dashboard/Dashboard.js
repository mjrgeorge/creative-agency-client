import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServicesList from '../adminPages/servicesList/ServicesList';
import ClientOrder from '../clientPages/clientOrder/ClientOrder';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState('');
    useEffect(() => {
        fetch('httpss:/tranqui/-beach-35378.hertkuapp.rumh-35378.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, []);

    console.log(isAdmin);

    return (
        <div>
            {
                isAdmin ? <ServicesList /> : <ClientOrder />
            }
        </div>
    );
};

export default Dashboard;