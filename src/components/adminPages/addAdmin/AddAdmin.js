import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import AdminPages from '../AdminPages';

const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('email', data.email);
        fetch('https://tranquil-beach-35378.herokuapp.com/addAdmin', {
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
        document.getElementById('email').value = '';
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
                    <h3 className="ml-5 pl-5 pb-5">Add Admin</h3>
                    <div className="bg-white p-5 rounded">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <label>Email</label>
                            <div className="input-group mb-3 w-75">
                                <input className="form-control" name="email" id="email" ref={register({ required: true })} placeholder="jon@gmail.com" />
                                {errors.name && <span className="error text-danger">Email is required</span>}
                                <div className="input-group-append">
                                    <button className="btn btn-success" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AddAdmin;