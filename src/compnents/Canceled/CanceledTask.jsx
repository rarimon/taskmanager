import React, {Fragment, useEffect} from 'react';
import {Tasklist} from "../../apirequest/apiRequest.js";
import {useSelector} from "react-redux";
import Card from "../card/Card.jsx";
import {DateTimeFormater} from "../../helper/DateFormatHelper.js";

const CanceledTask = () => {


    useEffect(() => {
        (async ()=>{
            Tasklist("Cancel")
        })()
    }, []);

    const CancelTasks =useSelector((state)=>state.tasks.Cancel);



    const DeleteItem=(id)=>{
        alert(id)
    }


    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    {
                        CancelTasks.map((item, index)=>{
                            return (
                                <div className="col-lg-3">
                                    <Card
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        date={DateTimeFormater(item.createdAt)}
                                        onEdit={() => alert('Edit clicked')}
                                        onDelete={()=>{DeleteItem(item._id)}}
                                        status={item.status}
                                        statusbgcolor="bg-danger"
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

export default CanceledTask;