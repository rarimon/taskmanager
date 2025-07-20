import React, {Fragment} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import CanceledTask from "../compnents/Canceled/CanceledTask.jsx";

const CanceledPage = () => {
    return (
        <Fragment>
            <MainLayout>
                <CanceledTask/>
            </MainLayout>
        </Fragment>
    );
};

export default CanceledPage;