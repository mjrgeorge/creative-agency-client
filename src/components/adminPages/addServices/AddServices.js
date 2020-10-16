import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPages from '../AdminPages';

const AddServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                <section className="col-md-10">
                    <div className="d-flex justify-content-end pt-3 pr-3">
                        <p>{loggedInUser.name}</p>
                        <img style={{ width: '30px', height: '30px' }} className="rounded-circle ml-3" src={loggedInUser.photo} alt="User" />
                    </div>
                    <h3 className="ml-5 pl-5 pb-5">Add Services</h3>
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
                </section>
            </div>
        </div>
    );
};

export default AddServices;