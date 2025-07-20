import React, {Fragment} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import Dashboard from "../compnents/Dashboard/Dashboard.jsx";



const DashboardPage = () => {


    return (
        <Fragment>
           <MainLayout>
              <Dashboard/>
           </MainLayout>


        </Fragment>


    );
};

export default DashboardPage;