import React, {Fragment} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import CompletedTask from "../compnents/Completed/CompletedTask.jsx";
import Profile from "../compnents/Profile/Profile.jsx";

const ProfilePage = () => {
    return (
        <Fragment>
            <MainLayout>
                <Profile/>
            </MainLayout>
        </Fragment>
    );
};

export default ProfilePage;