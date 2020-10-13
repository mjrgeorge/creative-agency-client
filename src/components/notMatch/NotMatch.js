import React from 'react';

const NotMatch = () => {
    return (
        <div style={{height:'100vh'}} className="bg-light" fluid>
            <div className="text-center display-1 text-danger">
                <p>404 Error!</p>
                <p>Sorry, Your Page Is Not Found.</p>
            </div>
        </div>
    );
};

export default NotMatch;