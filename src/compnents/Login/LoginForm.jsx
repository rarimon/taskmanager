import React, {Fragment} from 'react';
import {NavLink} from "react-router";
import {isEmpty, isValidEmail} from "../../helper/FormHelper.js";
import {showError} from "../../helper/AlertHelper.js";
import {LoginUser, RegisterUser} from "../../apirequest/apiRequest.js";

const LoginForm = () => {

    // State to manage form data
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    // Handler for input changes
    const inputHandler=(e)=>{
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

const formSubmit=async (e)=>{
        e.preventDefault();

        // Validate form data
        if(isEmpty(formData.email)){
            showError("Email is required");
        }
        // else if(isValidEmail(formData.email)){
        //     showError("Please enter a valid email address");
        // }
         else if(isEmpty(formData.password)){
            showError("Password is required");
        }

        else{
            // If all validations pass, proceed with registration
            try {
                await LoginUser(formData);
                window.location.href = "/";
            } catch (err) {
                console.log({err:err})
            }

        }

}




    return (
        <Fragment>
            <section>
                <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
                    <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                        <h2 className="text-center mb-4">Login</h2>

                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    onChange={inputHandler}
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="name@example.com"

                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    onChange={inputHandler}
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Remember me
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Login
                            </button>
                        </form>

                        <p className="text-center mt-3">
                            Don't have an account?{" "}
                            <NavLink to={"/registration"} className="text-decoration-none">
                                Sign Up
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default LoginForm;