import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ClientPages from '../ClientPages';

const ClientOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { serviceName } = useParams();

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('service', info.service);
        formData.append('details', info.details);
        formData.append('price', info.price);

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    alert('Data added successfully')
                    fieldReset();
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
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
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Order</h3>
                    <div className="bg-white p-5 rounded">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-7">
                                    <div class="form-group">
                                        <input onChange={handleChange} type="text" name="name" id="name" class="form-control" defaultValue={loggedInUser.name} placeholder="Your name / company's name" required />
                                    </div>
                                    <div class="form-group">
                                        <input onChange={handleChange} type="email" name="email" id="email" class="form-control" defaultValue={loggedInUser.email} placeholder="Your email address" required />
                                    </div>
                                    <div class="form-group">
                                        <input onChange={handleChange} type="text" name="service" id="service" class="form-control" defaultValue={serviceName} placeholder="service" required />
                                    </div>
                                    <div class="form-group">
                                        <textarea onChange={handleChange} name="details" id="details" class="form-control" placeholder="Project details" rows="3" required></textarea>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <input onChange={handleChange} type="text" name="price" id="price" class="form-control" placeholder="Price" required />
                                        </div>
                                        <div class="col">
                                            <input onChange={handleFileChange} type="file" id="file" class="form-control-file" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                </div>
                            </div>
                            <div className="text-left mt-3">
                                <button type="submit" class="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientOrder;