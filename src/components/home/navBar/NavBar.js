import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    const [, , isAdmin, ] = useContext(UserContext);
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
                            <Link className="nav-link" to="/orderReview">Ordered</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="https://mjrgeorge.netlify.app/portfolio" target="_blank">Our Portfolio</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="https://mjrgeorge.netlify.app/contact" target="_blank">Contact Us</a>
                        </li>
                    </ul>
                    {
                        isAdmin ?
                            <Link to="/dashboard">
                                <button className="btn btn-danger my-2 my-sm-0">Dashboard</button>
                            </Link>
                            :
                            <Link to="/login">
                                <button className="btn btn-dark my-2 my-sm-0">Login</button>
                            </Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;