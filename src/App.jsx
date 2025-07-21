import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import DashboardPage from "./pages/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import CanceledPage from "./pages/CanceledPage.jsx";
import CompletedPage from "./pages/CompletedPage.jsx";
import NewPage from "./pages/NewPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Page404 from "./pages/Page404.jsx";
import ForgetpassPage from "./pages/ForgetpassPage.jsx";
import {ToastContainer} from "react-toastify";
import FullScreenLoader from "./compnents/masterLayout/FullScreenLoader.jsx";

const App = () => {
    return (
        <Fragment>

            {/* Full screen loader component */}
            <FullScreenLoader/>

            {/* Main application routes start*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/cancel" element={<CanceledPage />} />
                    <Route path="/complate" element={<CompletedPage />} />
                    <Route path="/new" element={<NewPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/forgate" element={<ForgetpassPage />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
            {/* Main application routes start*/}

            {/* Toast Container for notifications */}
            <ToastContainer />

        </Fragment>
    );
};

export default App;