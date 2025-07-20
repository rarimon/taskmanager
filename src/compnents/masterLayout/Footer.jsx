import React, {Fragment} from 'react';

const Footer = () => {
    return (
        <Fragment>
            <footer className="pc-footer">
                <div className="footer-wrapper container-fluid">
                    <div className="row">
                        <div className="col-sm my-1">
                            <p className="m-0">
                                Mantis ♥ crafted by Team{" "}
                                <a href="https://themeforest.net/user/codedthemes" target="_blank">
                                    Codedthemes
                                </a>{" "}
                                Distributed by <a href="https://themewagon.com/">ThemeWagon</a>.
                            </p>
                        </div>
                        <div className="col-auto my-1">
                            <ul className="list-inline footer-link mb-0">
                                <li className="list-inline-item">
                                    <a href="../index.html">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;