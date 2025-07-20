import React, {Fragment} from 'react';

const LoginForm = () => {
    return (
        <Fragment>
            <section>
                <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
                    <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                        <h2 className="text-center mb-4">Login</h2>

                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
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
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
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
                            <a href="/registration" className="text-decoration-none">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default LoginForm;