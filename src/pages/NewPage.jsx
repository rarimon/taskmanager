import React, {Fragment, Suspense} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
const NewTask = React.lazy(() => import('../compnents/New/NewTask.jsx'));
import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";

const NewPage = () => {
    return (
        <Fragment>
            <MainLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <NewTask/>
                </Suspense>
            </MainLayout>
        </Fragment>
    );
};

export default NewPage;