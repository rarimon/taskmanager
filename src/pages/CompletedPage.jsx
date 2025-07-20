import React, {Fragment} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import CompletedTask from "../compnents/Completed/CompletedTask.jsx";

const CompletedPage = () => {
    return (
        <Fragment>
            <MainLayout>
                <CompletedTask/>
            </MainLayout>
        </Fragment>
    );
};

export default CompletedPage;