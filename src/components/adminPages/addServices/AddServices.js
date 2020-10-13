import React from 'react';
import AdminPages from '../AdminPages';

const AddServices = () => {
    return (
        <div className="container bg-light">
            <div className="row">
                <AdminPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Add Service</h3>
                    <div className="bg-white p-5 rounded">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label>Service Title</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label>Icon</label>
                                        <input type="file" class="form-control-file" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-right">
                            <button type="submit" class="btn btn-success">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;