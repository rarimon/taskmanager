import React, {Fragment, useEffect} from 'react';
import {countTask} from "../../apirequest/apiRequest.js";
import {useSelector} from "react-redux";
import SummarCard from "../card/SummarCard.jsx";
import Card from "../card/Card.jsx";

const Dashboard = () => {
    useEffect(() => {
        (async ()=>{
            countTask();
        })()
    }, []);

    const countTasks =useSelector((state)=>state.summary.value);



    return (
        <Fragment>

            <section className="w-100 vh-100 d-flex justify-content-center ">
                <div className="container mt-5">
                    <div className="row">
                        <h1 className="mb-5">Welcome To Dashboard</h1>

                        {
                            countTasks.map((item, index)=>{
                                return (
                                    <div key={index.toString()} className="col-lg-3">
                                        <SummarCard
                                            title={item._id}
                                            total={item.sum}

                                        />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>


        </Fragment>
    );
};

export default Dashboard;