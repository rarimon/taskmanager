import React, {Fragment} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import CompletedTask from "../compnents/Completed/CompletedTask.jsx";
import RegistrationForm from "../compnents/Registration/RegistrationForm.jsx";

const RegistrationPage = () => {
    return (
        <Fragment>
            <MainLayout>
                <RegistrationForm/>
            </MainLayout>
        </Fragment>
    );
};

export default RegistrationPage;