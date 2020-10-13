import React from 'react';
import logo from '../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const AdminPages = () => {
    return (
        <div className="container bg-light">
            <div className="row">
                <div className="col-md-3">
                    <div className="m-5">
                        <Link to="/home">
                            <img style={{ height: '70px' }} src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="m-4">
                        <Link to="/volunteer" className="text-decoration-none text-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hdd" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 9H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM2 8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z" /><path d="M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" /><path fill-rule="evenodd" d="M4.094 4a.5.5 0 0 0-.44.26l-2.47 4.532A1.5 1.5 0 0 0 1 9.51v.99H0v-.99c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198v.99h-1v-.99a1.5 1.5 0 0 0-.183-.718L12.345 4.26a.5.5 0 0 0-.439-.26H4.094z" /></svg> Service List </Link>
                    </div>
                    <div className="m-4">
                        <Link to="/volunteer" className="text-decoration-none text-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /></svg> Add Service </Link>
                    </div>
                    <div className="m-4">
                        <Link to="/volunteer" className="text-decoration-none text-dark"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" /></svg> Make Admin </Link>
                    </div>
                </div>
                <div className="col-md-9">
                    <h3 className="m-5">Add Service</h3>
                    <div className="bg-white p-5 rounded">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPages;