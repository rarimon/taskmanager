import React, {Fragment} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import NewTask from "../compnents/New/NewTask.jsx";

const NewPage = () => {
    return (
        <Fragment>
            <MainLayout>
                <NewTask/>
            </MainLayout>
        </Fragment>
    );
};

export default NewPage;