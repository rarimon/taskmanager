import React, {Fragment, Suspense} from 'react';
import MainLayout from "../compnents/masterLayout/MainLayout.jsx";
import LazyLoader from "../compnents/masterLayout/LazyLoader.jsx";
const Dashboard = React.lazy(() => import('../compnents/Dashboard/Dashboard.jsx'));


const DashboardPage = () => {


    return (
        <Fragment>
           <MainLayout>
               <Suspense fallback={<LazyLoader/>}>
                   <Dashboard/>
               </Suspense>

           </MainLayout>

        </Fragment>


    );
};

export default DashboardPage;