import React from 'react';
import ClientPages from '../ClientPages';

const ClientFeedback = () => {
    return (
        <div className="container bg-light">
            <div className="row">
                <ClientPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Feedback</h3>
                    <div className="bg-white p-5 rounded">
                        <form>
                            <div className="row">
                                <div className="col-md-7">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Your name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Company's name Designation" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Description" rows="3"></textarea>
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