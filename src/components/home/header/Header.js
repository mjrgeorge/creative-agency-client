import React from 'react';
import './Header.css';
import HeaderMain from '../headerMain/HeaderMain';
import NavBar from '../navBar/NavBar';

const Header = () => {
    return (
        <header className="header_container">
            <div className="header_sub_container">
                <NavBar />
                <HeaderMain />
            </div>
        </header>
    );
};

export default Header;