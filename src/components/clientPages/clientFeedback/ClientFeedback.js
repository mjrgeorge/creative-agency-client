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
        fetch('https://tranquil-beach-35378.herokuapp.com/addFeedback', {
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
        document.getElementById('company').value = '';
        document.getElementById('description').value = '';
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
                    <h3 className="ml-5 pl-5 pb-5">Feedback</h3>
                    <div className="bg-white p-5 rounded">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-7">
                                    <div class="form-group">
                                        <input className="form-control" name="name" id="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name / company's name" />
                                        {errors.name && <span className="error text-danger">Name is required</span>}
                                    </div>
                                    <div class="form-group">
                                        <input className="form-control" name="company" id="company" ref={register({ required: true })} placeholder="Company's name Designation" />
                                        {errors.name && <span className="error text-danger">Company is required</span>}
                                    </div>
                                    <div class="form-group">
                                        <textarea className="form-control" name="description" id="description" ref={register({ required: true })} cols="30" rows="10" placeholder="Description"></textarea>
                                        {errors.name && <span className="error text-danger">Description is required</span>}
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
                </section>
            </div>
        </div>
    );
};

export default ClientFeedback;