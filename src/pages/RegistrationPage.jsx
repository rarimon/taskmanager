import React, {Fragment, Suspense} from 'react';
const RegistrationForm = React.lazy(() => import('../compnents/Registration/RegistrationForm.jsx'));
import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";

const RegistrationPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <RegistrationForm/>
            </Suspense>
        </Fragment>
    );
};

export default RegistrationPage;