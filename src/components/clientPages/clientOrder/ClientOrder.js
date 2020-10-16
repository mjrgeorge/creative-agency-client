import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ClientPages from '../ClientPages';

const ClientOrder = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { serviceName } = useParams();
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('service', data.service);
        formData.append('details', data.details);
        formData.append('price', data.price);
        fetch('https://tranquil-beach-35378.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    alert('Data Added Successfully')
                    fieldReset();
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    const fieldReset = () => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('service').value = '';
        document.getElementById('details').value = '';
        document.getElementById('price').value = '';
        document.getElementById('file').value = '';
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <ClientPages />
                <section className="col-md-10">
                    <div className="d-flex justify-content-end pt-3 pr-3">
                        <p>{loggedInUser.name}</p>
                        <img style={{ width: '30px', height: '30px' }} className="rounded-circle ml-3" src={loggedInUser.photo} alt="User" />
                    </div>
                    <h3 className="ml-5 pl-4 pb-5">Order</h3>
                    <div className="bg-white p-5 rounded">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="form-group">
                                        <input className="form-control" name="name" id="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name / company's name" />
                                        {errors.name && <span className="error text-danger">Name is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="email" id="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your email address" />
                                        {errors.name && <span className="error text-danger">Email is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="service" id="service" defaultValue={serviceName} ref={register({ required: true })} placeholder="service" />
                                        {errors.name && <span className="error text-danger">Service is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="details" id="details" ref={register({ required: true })} placeholder="Project details" />
                                        {errors.name && <span className="error text-danger">Details is required</span>}
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <input className="form-control" name="price" id="price" ref={register({ required: true })} placeholder="Price" />
                                            {errors.name && <span className="error text-danger">Price is required</span>}
                                        </div>
                                        <div className="col">
                                            <input onChange={handleFileChange} type="file" id="file" className="form-control-file" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                </div>
                            </div>
                            <div className="text-left mt-3">
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ClientOrder;