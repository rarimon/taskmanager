import React, {Fragment, Suspense} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";
const CreateTask= React.lazy(() => import('../compnents/Create/CreateTask.jsx'));

const CreatePage = () => {
    return (
        <Fragment>
            <MainLayout>
                 <Suspense fallback={<LazyLoader/>}>
                     <CreateTask/>
                 </Suspense>
            </MainLayout>
        </Fragment>
    );
};

export default CreatePage;