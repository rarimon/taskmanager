import React, {Fragment, useEffect} from 'react';
import {Tasklist} from "../../apirequest/apiRequest.js";
import {useSelector} from "react-redux";
import Card from "../card/Card.jsx";
import {DateTimeFormater} from "../../helper/DateFormatHelper.js";

const CompletedTask = () => {

    useEffect(() => {
        (async ()=>{
            Tasklist("Complete")
        })()
    }, []);

    const complateTasks =useSelector((state)=>state.tasks.Complete);



    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">

                    {
                        complateTasks.map((item, index)=>{
                            return (
                                <div className="col-lg-3">
                                    <Card
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        date={DateTimeFormater(item.createdAt)}
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