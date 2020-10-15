import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#FBD062', color: 'rgba(0, 0, 0, 0.7)' }} className="text-center pb-5">
            <p>Copyright Orange labs {(new Date()).getFullYear()}</p>
        </footer>
    );
};

export default Footer;