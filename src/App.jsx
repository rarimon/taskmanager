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
import ProtectedRoute from "./compnents/protectedRoute/ProtectedRoute.jsx";

const App = () => {
    return (
        <Fragment>

            {/* Full screen loader component */}
            <FullScreenLoader/>

            {/* Main application routes start*/}
            <BrowserRouter>
                <Routes>

                    //non protected routes
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/forgate" element={<ForgetpassPage />} />
                    <Route path="*" element={<Page404 />} />


                    //protected routes
                    <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}/>
                    <Route path="/create" element={<ProtectedRoute><CreatePage /></ProtectedRoute>} />
                    <Route path="/cancel" element={<ProtectedRoute><CanceledPage /></ProtectedRoute>} />
                    <Route path="/complate" element={<ProtectedRoute><CompletedPage /></ProtectedRoute>} />
                    <Route path="/new" element={<ProtectedRoute><NewPage /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />


                </Routes>
            </BrowserRouter>
            {/* Main application routes start*/}

            {/* Toast Container for notifications */}
            <ToastContainer />

        </Fragment>
    );
};

export default App;