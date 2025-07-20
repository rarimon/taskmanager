import React, {Fragment, Suspense} from 'react';
const LoginForm = React.lazy(() => import('../compnents/Login/LoginForm.jsx'));
import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";

const LoginPage = () => {
    return (
        <Fragment>

            <Suspense fallback={<LazyLoader/>}>
                <LoginForm/>
            </Suspense>

        </Fragment>
    );
};

export default LoginPage;