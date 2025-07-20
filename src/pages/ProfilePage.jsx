import React, {Fragment, Suspense} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
const Profile = React.lazy(() => import('../compnents/Profile/Profile.jsx'));
import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";

const ProfilePage = () => {
    return (
        <Fragment>
            <MainLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Profile/>
                </Suspense>

            </MainLayout>
        </Fragment>
    );
};

export default ProfilePage;