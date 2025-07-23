import React, {Fragment} from 'react';
import {Link, NavLink, useNavigate} from "react-router";
import {getToken} from "../../helper/SessionHelper.js";
import {showSuccess} from "../../helper/AlertHelper.js";

const Token=getToken();


const MainLayout = (props) => {
    const navigate=useNavigate();

    // Function to handle logout
    const LogoutBtn = () => {
        localStorage.clear();

        showSuccess("Logout successful!");

        // Wait briefly so toast can be seen before redirect
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };


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
                            {Token !==null &&  <button onClick={LogoutBtn}  className="btn btn-success" type="submit">Log out</button>}
                        </div>
                    </div>
                </div>
            </nav>
            {props.children}

        </Fragment>

    );
};

export default MainLayout;