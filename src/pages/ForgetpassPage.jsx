import React, {Fragment, Suspense} from 'react';
import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";
const ForgatePasswordForm = React.lazy(() => import('../compnents/ForgatePassword/ForgatePasswordForm.jsx'));

const ForgetpassPage = () => {
    return (
        <Fragment>

            <Suspense fallback={<LazyLoader/>}>
                <ForgatePasswordForm />
            </Suspense>

        </Fragment>
    );
};

export default ForgetpassPage;