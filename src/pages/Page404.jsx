import React, {Fragment, Suspense} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
const NotFound = React.lazy(() => import('../compnents/NotFound/NotFound.jsx'));
import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";

const Page404 = () => {
    return (
        <Fragment>
            <MainLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <NotFound />
                </Suspense>

            </MainLayout>
        </Fragment>
    );
};

export default Page404;