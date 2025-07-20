import React, {Fragment} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";

import NotFound from "../compnents/NotFound/NotFound.jsx";

const Page404 = () => {
    return (
        <Fragment>
            <MainLayout>
                <NotFound />
            </MainLayout>
        </Fragment>
    );
};

export default Page404;