import React from 'react';

const FeedBack = (props) => {
    const { name, company, description, photo } = props.feedback;
    return (
        <div className="col-lg-4">
            <div className="card pt-4 m-3">
                <div className="card-header d-flex  align-items-center" style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <img className="mx-3 rounded-circle" src={photo} alt="" width="60" />
                    <div>
                        <h6>{name}</h6>
                        <p>{company}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;