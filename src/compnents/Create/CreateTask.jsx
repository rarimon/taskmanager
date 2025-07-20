import React, {Fragment} from 'react';
import {NavLink} from "react-router";

const CreateTask = () => {


    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-11">
                        <div className="card">
                            <div className="card-header">
                                <h1>Create Task</h1>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <div className="mb-3 text-center">
                                        <button type="submit" className="btn btn-success me-3">Submit</button>
                                        <NavLink to={"/"} className="btn btn-primary">Back</NavLink>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CreateTask;