import React, {Fragment, useEffect} from 'react';
import {Tasklist} from "../../apirequest/apiRequest.js";
import {useSelector} from "react-redux";
import Card from "../card/Card.jsx";
import {DateTimeFormater} from "../../helper/DateFormatHelper.js";
import {DeleteAlert, updateTaskStatus} from "../../helper/AlertHelper.js";

const CompletedTask = () => {

    useEffect(() => {
        (async ()=>{
            Tasklist("Complete")
        })()
    }, []);

    const complateTasks =useSelector((state)=>state.tasks.Complete);

    const DeleteItem = async (id) => {
        const result = await DeleteAlert(id);
        if (result === true) {
            Tasklist("Complete")
        }
    };

    const updateTask= async (id, status) => {
        const result = await updateTaskStatus(id,status);
        if (result === true) {
            Tasklist("Complete")
        }
    }


    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">


                    {complateTasks.length===0 ? <div className="col-lg-12 text-center text-danger"><h4>Complate Task Empty!</h4></div>:
                        complateTasks.map((item, index)=>{
                            return (
                                <div key={index.toString()} className="col-lg-3">
                                    <Card
                                        title={item.title}
                                        description={item.description}
                                        date={DateTimeFormater(item.createdAt)}
                                        onEdit={() => {updateTask(item._id, item.status)}}
                                        onDelete={()=>{DeleteItem(item._id)}}
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

export default CompletedTask;