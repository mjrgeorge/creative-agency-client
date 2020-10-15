import React, { useState } from 'react';
import AdminPages from '../AdminPages';

const AddServices = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
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
        formData.append('service', info.service);
        formData.append('description', info.description);

        fetch('https://tranquil-beach-35378.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    fieldReset();
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    };

    const fieldReset = () => {
        document.getElementById('service').value = '';
        document.getElementById('description').value = '';
        document.getElementById('file').value = '';
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <AdminPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Add Service</h3>
                    <div className="bg-white p-5 rounded">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label>Service Title</label>
                                        <input onBlur={handleBlur} type="text" name="service" id="service" class="form-control" placeholder="Enter Title" />
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea onBlur={handleBlur} name="description" id="description" class="form-control" placeholder="Enter Description" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label>Icon</label>
                                        <input onChange={handleFileChange} type="file" id="file" class="form-control-file" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <button type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;