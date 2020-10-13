import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import google from '../../images/google.png';

const Login = () => {
    const handleSignIn = () => {
        console.log('button click');
    }
    return (
        <div className="container bg-light pt-5">
            <Link to="/home">
                <div style={{ height:'80px'}} className="d-flex justify-content-center">
                    <img className="w-25" src={logo} alt="log"/>
                </div>
            </Link>
            <div className="d-flex justify-content-center">
                <div className="m-5 p-5 text-center" style={{width: '50%', border: '3px solid lightGray', borderRadius: '5px'}}>
                    <h2>Login With</h2>
                    <button onClick={handleSignIn} className="btn btn-outline-dark rounded-pill p-2 mt-4 mb-4 btn-block">
                        <img className="pr-3" style={{width: '50px'}} src={google} alt="icon"/>
                        Continue with Google
                    </button>
                    <p>Don't have an account? <Link to="#">Create an account</Link></p>
                    <p className="text-danger">error message show</p>
                </div>
            </div>
        </div>
    );
};

export default Login;