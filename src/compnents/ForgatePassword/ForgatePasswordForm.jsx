import React, {Fragment} from 'react';

const ForgatePasswordForm = () => {
    return (
        <Fragment>
            <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    <p className="text-center mb-4">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
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
                        <button type="submit" className="btn btn-primary w-100">
                            Send Reset Link
                        </button>
                    </form>
                    <p className="text-center mt-3">
                        Remembered your password?{" "}
                        <a href="/login" className="text-decoration-none">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default ForgatePasswordForm;