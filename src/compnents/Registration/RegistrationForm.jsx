import React, {Fragment} from 'react';
import {NavLink} from "react-router";

const RegistrationForm = () => {
    return (
        <Fragment>
            <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                    <h2 className="text-center mb-4">Register</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Register
                        </button>
                    </form>

                    <p className="text-center mt-3">
                        Already have an account?{" "}
                        <NavLink to={"/login"} className="text-decoration-none">
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default RegistrationForm;