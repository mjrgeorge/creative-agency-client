import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('https://tranquil-beach-35378.herokuapp.com/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                alert('Data Added Successfully')
                fieldReset();
            })
    };
    const fieldReset = () => {
        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    };

    return (
        <section style={{ backgroundColor: '#FBD062' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 p-5">
                        <h2>Let us handle your project, professionally.</h2>
                        <p style={{ color: 'rgba(0, 0, 0, 0.7)' }} className="pt-4 pr-5">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6 mt-5 p-5">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" id="email" ref={register({ required: true })} placeholder="Your email address" />
                                {errors.name && <span className="error text-danger">Email is required</span>}
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" ref={register({ required: true })} placeholder="Your name / company's name" />
                                {errors.name && <span className="error text-danger">Email is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" id="message" ref={register({ required: true })} cols="30" rows="10" placeholder="Your message"></textarea>
                                {errors.name && <span className="error text-danger">Message is required</span>}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark px-5"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;