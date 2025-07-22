import React, {Fragment, useEffect} from 'react';
import {Tasklist} from "../../apirequest/apiRequest.js";
import {useSelector} from "react-redux";
import Card from "../card/Card.jsx";

const CompletedTask = () => {

    useEffect(() => {
        (async ()=>{
            Tasklist("Complete")
        })()
    }, []);

    const complateTasks =useSelector((state)=>state.tasks.Complete);
    console.log(complateTasks);


    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">

                    {
                        complateTasks.map((item, index)=>{
                            return (
                                <div className="col-lg-3">
                                    <Card
                                        title={item.title}
                                        description={item.description}
                                        date={item.createdAt}
                                        onEdit={() => alert('Edit clicked')}
                                        onDelete={() => alert('Delete clicked')}
                                        status={item.status}
                                        statusbgcolor="bg-success"
                                    />
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </Fragment>
    );
};

export default CompletedTask;