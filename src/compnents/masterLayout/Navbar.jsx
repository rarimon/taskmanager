import React, {Fragment} from 'react';
import {NavLink} from "react-router";

const Navbar = () => {
    return (
        <Fragment>

            {/* [ Sidebar Menu ] start */}
            <nav className="pc-sidebar">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <NavLink to={"/"} className="b-brand text-primary">
                            {/* ========   Change your logo from here   ============ */}
                            <img
                                src="/src/assets/images/logo-dark.svg"
                                className="img-fluid logo-lg"
                                alt="logo"
                            />
                        </NavLink>
                    </div>
                    <div className="navbar-content">
                        <ul className="pc-navbar">
                            <li className="pc-item">
                                <NavLink to={"/"} className="pc-link">
                                  <span className="pc-micon">
                                    <i className="ti ti-dashboard" />
                                  </span>
                                    <span className="pc-mtext">Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Task</label>
                                <i className="ti ti-dashboard" />
                            </li>
                            <li className="pc-item">
                                <NavLink to={"/create"} className="pc-link">
                                  <span className="pc-micon">
                                    <i className="ti ti-layout-grid-add" />
                                  </span>
                                    <span className="pc-mtext">Add Task</span>
                                </NavLink>
                            </li>
                            <li className="pc-item">
                                <a href="../elements/bc_color.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-color-swatch" />
              </span>
                                    <span className="pc-mtext">Color</span>
                                </a>
                            </li>
                            <li className="pc-item">
                                <a href="../elements/icon-tabler.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-plant-2" />
              </span>
                                    <span className="pc-mtext">Icons</span>
                                </a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Pages</label>
                                <i className="ti ti-news" />
                            </li>
                            <li className="pc-item">
                                <a href="../pages/login.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-lock" />
              </span>
                                    <span className="pc-mtext">Login</span>
                                </a>
                            </li>
                            <li className="pc-item">
                                <a href="../pages/register.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-user-plus" />
              </span>
                                    <span className="pc-mtext">Register</span>
                                </a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Other</label>
                                <i className="ti ti-brand-chrome" />
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-menu" />
              </span>
                                    <span className="pc-mtext">Menu levels</span>
                                    <span className="pc-arrow">
                <i data-feather="chevron-right" />
              </span>
                                </a>
                                <ul className="pc-submenu">
                                    <li className="pc-item">
                                        <a className="pc-link" href="#!">
                                            Level 2.1
                                        </a>
                                    </li>
                                    <li className="pc-item pc-hasmenu">
                                        <a href="#!" className="pc-link">
                                            Level 2.2
                                            <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                                        </a>
                                        <ul className="pc-submenu">
                                            <li className="pc-item">
                                                <a className="pc-link" href="#!">
                                                    Level 3.1
                                                </a>
                                            </li>
                                            <li className="pc-item">
                                                <a className="pc-link" href="#!">
                                                    Level 3.2
                                                </a>
                                            </li>
                                            <li className="pc-item pc-hasmenu">
                                                <a href="#!" className="pc-link">
                                                    Level 3.3
                                                    <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                                                </a>
                                                <ul className="pc-submenu">
                                                    <li className="pc-item">
                                                        <a className="pc-link" href="#!">
                                                            Level 4.1
                                                        </a>
                                                    </li>
                                                    <li className="pc-item">
                                                        <a className="pc-link" href="#!">
                                                            Level 4.2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pc-item pc-hasmenu">
                                        <a href="#!" className="pc-link">
                                            Level 2.3
                                            <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                                        </a>
                                        <ul className="pc-submenu">
                                            <li className="pc-item">
                                                <a className="pc-link" href="#!">
                                                    Level 3.1
                                                </a>
                                            </li>
                                            <li className="pc-item">
                                                <a className="pc-link" href="#!">
                                                    Level 3.2
                                                </a>
                                            </li>
                                            <li className="pc-item pc-hasmenu">
                                                <a href="#!" className="pc-link">
                                                    Level 3.3
                                                    <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                                                </a>
                                                <ul className="pc-submenu">
                                                    <li className="pc-item">
                                                        <a className="pc-link" href="#!">
                                                            Level 4.1
                                                        </a>
                                                    </li>
                                                    <li className="pc-item">
                                                        <a className="pc-link" href="#!">
                                                            Level 4.2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="pc-item">
                                <a href="../other/sample-page.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-brand-chrome" />
              </span>
                                    <span className="pc-mtext">Sample page</span>
                                </a>
                            </li>
                        </ul>
                        <div className="card text-center">
                            <div className="card-body">
                                <img
                                    src="../assets/images/img-navbar-card.png"
                                    alt="images"
                                    className="img-fluid mb-2"
                                />
                                <h5>Upgrade To Pro</h5>
                                <p>To get more features and components</p>
                                <a
                                    href="https://codedthemes.com/item/berry-bootstrap-5-admin-template/"
                                    target="_blank"
                                    className="btn btn-success"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* [ Sidebar Menu ] end */} {/* [ Header Topbar ] start */}
            <header className="pc-header">
                <div className="header-wrapper">
                    {" "}
                    {/* [Mobile Media Block] start */}
                    <div className="me-auto pc-mob-drp">
                        <ul className="list-unstyled">
                            {/* ======= Menu collapse Icon ===== */}
                            <li className="pc-h-item pc-sidebar-collapse">
                                <a href="#" className="pc-head-link ms-0" id="sidebar-hide">
                                    <i className="ti ti-menu-2" />
                                </a>
                            </li>
                            <li className="pc-h-item pc-sidebar-popup">
                                <a href="#" className="pc-head-link ms-0" id="mobile-collapse">
                                    <i className="ti ti-menu-2" />
                                </a>
                            </li>
                            <li className="dropdown pc-h-item d-inline-flex d-md-none">
                                <a
                                    className="pc-head-link dropdown-toggle arrow-none m-0"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <i className="ti ti-search" />
                                </a>
                                <div className="dropdown-menu pc-h-dropdown drp-search">
                                    <form className="px-3">
                                        <div className="form-group mb-0 d-flex align-items-center">
                                            <i data-feather="search" />
                                            <input
                                                type="search"
                                                className="form-control border-0 shadow-none"
                                                placeholder="Search here. . ."
                                            />
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="pc-h-item d-none d-md-inline-flex">
                                <form className="header-search">
                                    <i data-feather="search" className="icon-search" />
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search here. . ."
                                    />
                                </form>
                            </li>
                        </ul>
                    </div>
                    {/* [Mobile Media Block end] */}
                    <div className="ms-auto">
                        <ul className="list-unstyled">
                            <li className="dropdown pc-h-item">
                                <a
                                    className="pc-head-link dropdown-toggle arrow-none me-0"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <i className="ti ti-mail" />
                                </a>
                                <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                                    <div className="dropdown-header d-flex align-items-center justify-content-between">
                                        <h5 className="m-0">Message</h5>
                                        <a href="#!" className="pc-head-link bg-transparent">
                                            <i className="ti ti-x text-danger" />
                                        </a>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div
                                        className="dropdown-header px-0 text-wrap header-notification-scroll position-relative"
                                        style={{ maxHeight: "calc(100vh - 215px)" }}
                                    >
                                        <div className="list-group list-group-flush w-100">
                                            <a className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="/src/assets/images/user/avatar-2.jpg"
                                                            alt="user-image"
                                                            className="user-avtar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-1">
                                                        <span className="float-end text-muted">3:00 AM</span>
                                                        <p className="text-body mb-1">
                                                            It's <b>Cristina danny's</b> birthday today.
                                                        </p>
                                                        <span className="text-muted">2 min ago</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="/src/assets/images/user/avatar-1.jpg"
                                                            alt="user-image"
                                                            className="user-avtar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-1">
                                                        <span className="float-end text-muted">6:00 PM</span>
                                                        <p className="text-body mb-1">
                                                            <b>Aida Burg</b> commented your post.
                                                        </p>
                                                        <span className="text-muted">5 August</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="../assets/images/user/avatar-3.jpg"
                                                            alt="user-image"
                                                            className="user-avtar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-1">
                                                        <span className="float-end text-muted">2:45 PM</span>
                                                        <p className="text-body mb-1">
                                                            <b>There was a failure to your setup.</b>
                                                        </p>
                                                        <span className="text-muted">7 hours ago</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="/src/assets/images/user/avatar-4.jpg"
                                                            alt="user-image"
                                                            className="user-avtar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-1">
                                                        <span className="float-end text-muted">9:10 PM</span>
                                                        <p className="text-body mb-1">
                                                            <b>Cristina Danny </b> invited to join{" "}
                                                            <b> Meeting.</b>
                                                        </p>
                                                        <span className="text-muted">
                          Daily scrum meeting time
                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div className="text-center py-2">
                                        <a href="#!" className="link-primary">
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown pc-h-item header-user-profile">
                                <a
                                    className="pc-head-link dropdown-toggle arrow-none me-0"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    data-bs-auto-close="outside"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="/src/assets/images/user/avatar-2.jpg"
                                        alt="user-image"
                                        className="user-avtar"
                                    />
                                    <span>Stebin Ben</span>
                                </a>
                                <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                                    <div className="dropdown-header">
                                        <div className="d-flex mb-1">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src="../assets/images/user/avatar-2.jpg"
                                                    alt="user-image"
                                                    className="user-avtar wid-35"
                                                />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">Stebin Ben</h6>
                                                <span>UI/UX Designer</span>
                                            </div>
                                            <a href="#!" className="pc-head-link bg-transparent">
                                                <i className="ti ti-power text-danger" />
                                            </a>
                                        </div>
                                    </div>
                                    <ul
                                        className="nav drp-tabs nav-fill nav-tabs"
                                        id="mydrpTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="drp-t1"
                                                data-bs-toggle="tab"
                                                data-bs-target="#drp-tab-1"
                                                type="button"
                                                role="tab"
                                                aria-controls="drp-tab-1"
                                                aria-selected="true"
                                            >
                                                <i className="ti ti-user" /> Profile
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="drp-t2"
                                                data-bs-toggle="tab"
                                                data-bs-target="#drp-tab-2"
                                                type="button"
                                                role="tab"
                                                aria-controls="drp-tab-2"
                                                aria-selected="false"
                                            >
                                                <i className="ti ti-settings" /> Setting
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="mysrpTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="drp-tab-1"
                                            role="tabpanel"
                                            aria-labelledby="drp-t1"
                                            tabIndex={0}
                                        >
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-edit-circle" />
                                                <span>Edit Profile</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-user" />
                                                <span>View Profile</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-clipboard-list" />
                                                <span>Social Profile</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-wallet" />
                                                <span>Billing</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-power" />
                                                <span>Logout</span>
                                            </a>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="drp-tab-2"
                                            role="tabpanel"
                                            aria-labelledby="drp-t2"
                                            tabIndex={0}
                                        >
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-help" />
                                                <span>Support</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-user" />
                                                <span>Account Settings</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-lock" />
                                                <span>Privacy Center</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-messages" />
                                                <span>Feedback</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-list" />
                                                <span>History</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {/* [ Header ] end */}
        </Fragment>
    );
};

export default Navbar;