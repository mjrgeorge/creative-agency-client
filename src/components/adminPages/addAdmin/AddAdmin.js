import React from 'react';
import AdminPages from '../AdminPages';

const AddAdmin = () => {
    
    return (
        <div className="container bg-light">
            <div className="row">
                <AdminPages />
                <div className="col-md-10">
                    <h3 className="mt-5 ml-5 p-4">Add Admin</h3>
                    <div className="bg-white p-5 rounded">
                        <form>
                            <label>Email</label>
                            <div class="input-group mb-3 w-75">
                                <input type="text" class="form-control" placeholder="jon@gmail.com" required/>
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