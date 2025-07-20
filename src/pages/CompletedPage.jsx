import React, {Fragment, Suspense} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";

import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";
const CompletedTask = React.lazy(() => import('../compnents/Completed/CompletedTask.jsx'));

const CompletedPage = () => {
    return (
        <Fragment>
            <MainLayout>
                 <Suspense fallback={<LazyLoader/>}>
                     <CompletedTask/>
                 </Suspense>
            </MainLayout>
        </Fragment>
    );
};

export default CompletedPage;