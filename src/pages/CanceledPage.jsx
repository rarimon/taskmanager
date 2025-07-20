import React, {Fragment, Suspense} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";
const CanceledTask = React.lazy(() => import('../compnents/Canceled/CanceledTask.jsx'));

const CanceledPage = () => {
    return (
        <Fragment>
            <MainLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CanceledTask/>
                </Suspense>
            </MainLayout>
        </Fragment>
    );
};

export default CanceledPage;