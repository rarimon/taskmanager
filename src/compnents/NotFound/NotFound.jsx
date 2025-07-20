import React, {Fragment} from 'react';
import {NavLink} from "react-router";

const NotFound = () => {
    return (
        <Fragment>
            <section className="vh-100 d-flex justify-content-center align-items-center bg-light text-center">
                <div className="container">
                    <h1 className="display-1 fw-bold text-danger">404</h1>
                    <p className="fs-3">
                        <span className="text-danger">Oops!</span> Page not found.
                    </p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <NavLink to={"/"} className="btn btn-primary">Go Home</NavLink>
                </div>
            </section>
        </Fragment>
    );
};

export default NotFound;