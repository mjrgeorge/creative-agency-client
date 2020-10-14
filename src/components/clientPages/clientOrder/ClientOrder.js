import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ClientPages from '../ClientPages';

const ClientOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {serviceName} = useParams();
    console.log(serviceName);
    console.log(loggedInUser);

    return (
        <div className="container bg-light">
            <div className="row">
                <ClientPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Order</h3>
                    <div className="bg-white p-5 rounded">
                        <form>
                            <div className="row">
                                <div className="col-md-7">
                                    <div class="form-group">
                                        <input type="text" class="form-control" defaultValue={loggedInUser.name} placeholder="Your name / company's name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" defaultValue={loggedInUser.email} placeholder="Your email address" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" defaultValue={serviceName} placeholder="services" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Project details" rows="3"></textarea>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Price" />
                                        </div>
                                        <div class="col">
                                            <input type="file" class="form-control-file" />
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