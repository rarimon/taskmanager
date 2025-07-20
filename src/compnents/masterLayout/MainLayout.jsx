import React, {Fragment} from 'react';
import {Link, NavLink} from "react-router";

const MainLayout = (props) => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container">
                    <NavLink to={"/"} className="navbar-brand" >
                        Logo
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link active" aria-current="page" >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/create"} className="nav-link" >
                                    Add Task
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/new"} className="nav-link" >
                                    New Task
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/complate"} className="nav-link" >
                                    Complate Task
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={"/cancel"} className="nav-link" >
                                    Cencel Task
                                </NavLink>
                            </li>


                        </ul>

                        <div>
                            <NavLink to={"/profile"} className="nav-link mx-3" >
                                Profile
                            </NavLink>
                        </div>
                        <div>
                            <button className="btn btn-success" type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {props.children}

        </Fragment>

    );
};

export default MainLayout;