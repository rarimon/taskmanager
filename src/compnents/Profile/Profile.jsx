import React, {Fragment, useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router";
import {ProfileDetails, ProfileUpdate, Tasklist} from "../../apirequest/apiRequest.js";
import {useSelector} from "react-redux";
import {showError} from "../../helper/AlertHelper.js";
import {isEmpty} from "../../helper/FormHelper.js";

const Profile = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await ProfileDetails();
        })()
    }, []);

    const userProfile = useSelector((state) => state.userProfile.user);



// State to hold form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: ''
    });


    //handleChange function to update form data
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

const formSubmit=async (e) => {
        e.preventDefault()

    // form validation
    if(isEmpty(formData.firstname)){
        showError("First name is required");
    }
    else if(isEmpty(formData.lastname)){
        showError("Last name is required");
    }
    else if(isEmpty(formData.phone)){
        showError("Phone number is required");
    }
    else if(isEmpty(formData.email)){
        showError( "Email is required");
    }

    else if(isEmpty(formData.password)){
        showError("Password is required");
    }

    else {
        try {
            // Assuming you have a function to create a task
            await ProfileUpdate(formData);
            Navigate("/")
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
                                <h1>Profile update</h1>
                            </div>

                            <div className="card-body ">

                                <form onSubmit={formSubmit} className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                        <input onChange={handleChange}  value={userProfile.firstname}   name='firstname' type="text" className="form-control" id="inputEmail4"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input onChange={handleChange} value={userProfile.lastname} name="lastname" type="text" className="form-control" id="inputPassword4"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input onChange={handleChange} value={userProfile.phone} name="phone" type="tel" className="form-control" id="inputPassword4"/>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input onChange={handleChange} value={userProfile.email} name="email" type="email" className="form-control" readOnly id="inputPassword4"/>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input onChange={handleChange}  name="password" type="password" className="form-control" id="inputPassword4"/>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Update</button>
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

export default Profile;