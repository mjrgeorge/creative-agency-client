import React from 'react';
import { useForm } from 'react-hook-form';
import AdminPages from '../AdminPages';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log('From submitted data', data);
        const formData = new FormData();
        formData.append('email', data.email);
        fetch('https://tranquil-beach-35378.herokuapp.com/addAdmin', {
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
        document.getElementById('email').value = '';
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <AdminPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Add Admin</h3>
                    <div className="bg-white p-5 rounded">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <label>Email</label>
                            <div class="input-group mb-3 w-75">
                                <input className="form-control" name="email" id="email" ref={register({ required: true })} placeholder="jon@gmail.com" />
                                {errors.name && <span className="error text-danger">Email is required</span>}
                                <div class="input-group-append">
                                    <button class="btn btn-success" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;