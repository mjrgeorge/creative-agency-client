import React from 'react';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 p-5">
                        <h2>Let us handle your project, professionally.</h2>
                        <p style={{color: 'rgba(0, 0, 0, 0.7)' }} className="pt-4 pr-5">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6 mt-5 p-5">
                        <form action="">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your email address" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company's name" required/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" cols="30" rows="10" placeholder="Your message" required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark px-5"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;