import React, {Fragment} from 'react';
import {NavLink, useNavigate} from "react-router";
import {isEmpty} from "../../helper/FormHelper.js";
import {showError} from "../../helper/AlertHelper.js";
import {createTask} from "../../apirequest/apiRequest.js";

const CreateTask = () => {


    const Navigate=useNavigate();


    // State to hold form data
    const [formData, setFormData] = React.useState({
        title: '',
        description: '',
        status: 'New'
    });

    // Handler for input changes
    const inputHandler=(e)=>{
        const {value, name} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }


    // Handler for form submission
    const formSubmit=async (e)=>{
        e.preventDefault();

        // form validation
        if(isEmpty(formData.title)){
            showError("Title is required");
        }
        else if(isEmpty(formData.description)){
            showError("Description is required");
        }

        else {
            try {
                // Assuming you have a function to create a task
                await createTask(formData);
                Navigate("/new")
            } catch (error) {

            }
        }

    }



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

                                <form onSubmit={formSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                        <input onChange={inputHandler} name="title"  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                        <textarea onChange={inputHandler} name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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