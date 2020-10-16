import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import google from '../../images/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useState } from 'react';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        name: "",
        email: "",
        photo: "",
        error: "",
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/dashboard" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn =()=>{
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(error => {
            const errorMessage = error.message;
            setUser({error:errorMessage});
          });
    };
    return (
        <section className="container bg-light pt-5">
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
                    <p>Don't have an account? <Link onClick={handleSignIn} to="#">Create an account</Link></p>
                    <p className="text-danger">{user.error}</p>
                </div>
            </div>
        </section>
    );
};

export default Login;