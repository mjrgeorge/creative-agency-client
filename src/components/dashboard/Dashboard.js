import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServicesList from '../adminPages/servicesList/ServicesList';
import ClientOrder from '../clientPages/clientOrder/ClientOrder';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState('');
    useEffect(() => {
        fetch('https://tranquil-beach-35378.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, []);

    return (
        <section>

            {
                isAdmin ? <ServicesList /> : <ClientOrder />
            }
        </section>
    );
};

export default Dashboard;