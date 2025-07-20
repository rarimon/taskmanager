import React, {Fragment} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import CreateTask from "../compnents/Create/CreateTask.jsx";

const CanceledPage = () => {
    return (
        <Fragment>
            <MainLayout>
                <CreateTask/>
            </MainLayout>
        </Fragment>
    );
};

export default CanceledPage;