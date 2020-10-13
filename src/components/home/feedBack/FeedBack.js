import React from 'react';

const FeedBack = (props) => {
    const {comment,name,company ,img} = props.feedback;
    return (
        <div className="card pt-4">
            <div className="card-header d-flex  align-items-center" style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6>{name}</h6>
                    <p>{company}</p>
                </div>
            </div>
            <div className="card-body">
                <p style={{color: 'rgba(0, 0, 0, 0.7)' }}>{comment}</p>
            </div>
       </div>
    );
};

export default FeedBack;