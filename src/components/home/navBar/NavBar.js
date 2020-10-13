import React from 'react';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <a class="navbar-brand" href="#"><img className="w-50" src={logo} alt="Logo"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-3 active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Our Portfolio</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Our Team</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <button class="btn btn-dark my-2 my-sm-0">Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;