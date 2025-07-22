import React, {Fragment} from 'react';
import Card from "../card/Card.jsx";

const Dashboard = () => {
    return (
        <Fragment>

            <section className="w-100 vh-100 d-flex justify-content-center ">
                <div className="container mt-5">
                    <div className="row">
                        <h1 className="mb-5">Welcome To Dashboard</h1>

                        <Card
                            title="ujkghk"
                            description="hjgkhkgh"
                            date="12-07-2022"
                            onEdit={() => alert('Edit clicked')}
                            onDelete={() => alert('Delete clicked')}
                        />





                        {/*<div className="col-lg-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-header">*/}
                        {/*            <h1>Task Name</h1>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            sdfsdf*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-header">*/}
                        {/*            <h1>Task Name</h1>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            sdfsdf*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-header">*/}
                        {/*            <h1>Task Name</h1>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            sdfsdf*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-header">*/}
                        {/*            <h1>Task Name</h1>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            sdfsdf*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                    </div>
                </div>
            </section>


        </Fragment>
    );
};

export default Dashboard;