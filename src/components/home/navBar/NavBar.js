import React from 'react';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand" href="#"><img className="w-50" src={logo} alt="Logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3 active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#">Our Portfolio</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#">Our Team</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <button className="btn btn-dark my-2 my-sm-0">Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;