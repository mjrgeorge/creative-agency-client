import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import ClientPages from '../ClientPages';

const ClientFeedback = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [info, setInfo] = useState({
        name: '',
        company: '',
        description: '',
        photo: loggedInUser.photo,
    });

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleSubmit = (e) => {
        fetch('http://localhost:5000/addFeedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    fieldReset();
                }
            })
            .catch(err => console.log(err));
        e.preventDefault();
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
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-7">
                                    <div class="form-group">
                                        <input onBlur={handleBlur} type="text" name="name" id="name" class="form-control" placeholder="Your name" />
                                    </div>
                                    <div class="form-group">
                                        <input onBlur={handleBlur} type="text" name="company" id="company" class="form-control" placeholder="Company's name Designation" />
                                    </div>
                                    <div class="form-group">
                                        <textarea onBlur={handleBlur} name="description" id="description" class="form-control" placeholder="Description" rows="3"></textarea>
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