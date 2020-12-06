import React, { useEffect } from 'react';
import { useState } from 'react';
import FeedBack from '../feedBack/FeedBack';

const FeedBacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-plains-00166.herokuapp.com/feedbacks')
            .then(response => response.json())
            .then(data => setFeedbacks(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <section className="my-5 py-5">
            <div className="container">
                <div>
                    <h2 className="m-3 text-center" style={{ color: '#171B4E' }}>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
                </div>
                <div className=" row card-deck mt-5">
                    {
                        feedbacks.map(feedback => <FeedBack feedback={feedback} key={feedback._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeedBacks;