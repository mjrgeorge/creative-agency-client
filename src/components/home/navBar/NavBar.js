import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <Link className="navbar-brand" to="/home"><img className="w-50" src={logo} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3 active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link" to="#">Our Portfolio</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link" to="#">Our Team</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link" to="#">Contact Us</Link>
                        </li>
                    </ul>
                    <Link to="/login">
                        <button className="btn btn-dark my-2 my-sm-0">Login</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;