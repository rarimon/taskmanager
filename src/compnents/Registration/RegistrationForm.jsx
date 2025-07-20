import React, {Fragment, useState} from 'react';
import {NavLink} from "react-router";
import {isEmpty, isValidBDPhone, isValidEmail} from "../../helper/FormHelper.js";
import { showError} from "../../helper/AlertHelper.js";

const RegistrationForm = () => {

    // State to hold input values
    const [inputValues, setInputValues] =useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        photo: null
    });



    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value, files,type } = e.target;
        if (type === 'file') {
            setInputValues(prevState => ({
                ...prevState,
                [name]: files[0] // Store the file object
            }));
        } else {
            setInputValues(prevState => ({
                ...prevState,
                [name]: value // Update the input value,
            }));
        }

    }


    // Function to handle form submission
    const formSubmitHandler=(e)=>{
        e.preventDefault();

        // form validation
        if(isEmpty(inputValues.firstName)){
            showError("First name is required");
        }
        else if(isEmpty(inputValues.lastName)){
            showError("Last name is required");
        }
        else if(isEmpty(inputValues.email)){
            showError("Email address is required");
        }
        else if(!isValidEmail(inputValues.email)){
            showError("Please enter a valid email address");
        }
        else if(isEmpty(inputValues.phone)){
                    showError("Phone number is required");
                }
        else if(!isValidBDPhone(inputValues.phone)){
                    showError("Please enter a valid Bangladeshi phone number");
                }
        else if(isEmpty(inputValues.password)){
            showError("Password is required");
        }
        else if(isEmpty(inputValues.confirmPassword)){
            showError("Confirm password is required");
        }
        else if(inputValues.password !== inputValues.confirmPassword){
            showError("Password and confirm password do not match!");
        }


        else{
            // If all validations pass, you can proceed with form submission
            console.log("Form submitted successfully", inputValues);
            // Here you can add your API call or any other logic
        }


    }





    return (
        <Fragment>
            <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="card shadow-sm p-4" style={{ maxWidth: "600px", width: "100%" }}>
                    <h2 className="text-center mb-4">Register</h2>
                    <form onSubmit={formSubmitHandler}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input onChange={handleInputChange} type="text" name="firstName"
                                    id="firstName"
                                    className="form-control"
                                    placeholder="Enter first name"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className="form-control"
                                    placeholder="Enter last name"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    onChange={handleInputChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="name@example.com"

                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input
                                    onChange={handleInputChange}
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Enter phone number"

                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter password"

                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    className="form-control"
                                    placeholder="Confirm password"

                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Register
                        </button>
                    </form>

                    <p className="text-center mt-3">
                        Already have an account?{" "}
                        <NavLink to="/login" className="text-decoration-none">
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>

        </Fragment>
    );
};

export default RegistrationForm;