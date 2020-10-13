import React from 'react';
import './Header.css';
import HeaderMain from '../headerMain/HeaderMain';
import NavBar from '../navBar/NavBar';

const Header = () => {
    return (
        <div className="header_container">
            <div className="header_sub_container">
                <NavBar />
                <HeaderMain />
            </div>
        </div>
    );
};

export default Header;