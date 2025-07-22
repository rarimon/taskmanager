import React, {Fragment, useEffect} from 'react';
import Card from "../card/Card.jsx";
import {Tasklist} from "../../apirequest/apiRequest.js";
import {useSelector} from "react-redux";
import {DateFormater, DateTimeFormater} from "../../helper/DateFormatHelper.js";

const NewTask = () => {

    useEffect(() => {
        (async ()=>{
            Tasklist("New")
        })()
    }, []);

    const newTasks =useSelector((state)=>state.tasks.New);


    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">

                        {
                            newTasks.map((item, index)=>{
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
                                        statusbgcolor="bg-info"
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

export default NewTask;