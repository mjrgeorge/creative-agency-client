import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import ClientPages from '../ClientPages';

const ClientFeedback = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('company', data.company);
        formData.append('description', data.description);
        formData.append('photo', loggedInUser.photo);
        fetch('http://localhost:5000/addFeedback', {
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
    };

    const fieldReset = () => {
        document.getElementById('name').value = '';
        document.getElementById('company').value = '';
        document.getElementById('description').value = '';
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <ClientPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Feedback</h3>
                    <div className="bg-white p-5 rounded">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-7">
                                    <div class="form-group">
                                        <input className="form-control" name="name" id="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name / company's name" />
                                        {errors.name && <span className="error">Name is required</span>}
                                    </div>
                                    <div class="form-group">
                                        <input className="form-control" name="company" id="company" ref={register({ required: true })} placeholder="Company's name Designation" />
                                        {errors.name && <span className="error">Company is required</span>}
                                    </div>
                                    <div class="form-group">
                                        <input className="form-control" name="description" id="description" ref={register({ required: true })} placeholder="Description" />
                                        {errors.name && <span className="error">Description is required</span>}
                                    </div>
                                </div>
                                <div className="col-md-5">
                                </div>
                            </div>
                            <div className="text-left mt-2">
                                <button type="submit" class="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedback;