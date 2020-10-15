import React from 'react';
import './HeaderMain.css';
import Frame from '../../../images/logos/Frame.png';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="my-4 mr-5">Let’s Grow Your Brand To The Next Level</h1>
                    <p className="my-4 mr-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, nesciunt officiis architecto animi nisi vitae!</p>
                    <Link to="/orderReview" className="text-decoration-none">
                        <button className="btn btn-dark px-5">Hire us</button>
                    </Link>
                </div>
                <div className="col-md-8">
                    <img className="img-fluid ml-5 px-5" src={Frame} alt="Frame" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;