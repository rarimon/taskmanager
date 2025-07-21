import React, {Fragment} from 'react';
import {useSelector} from "react-redux";

const LazyLoader = () => {

    const Loader=useSelector((state)=>state.setting.loading);


    return (
        <Fragment>
            <div
                className={Loader+" position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"}
                style={{
                    zIndex: 1050,
                    backgroundColor: "rgba(0, 0, 0, 0.4)", // হালকা ডার্ক ব্যাকগ্রাউন্ড
                    backdropFilter: "blur(6px)", // ব্লার ইফেক্ট
                    WebkitBackdropFilter: "blur(6px)", // Safari support
                }}
            >
                <div
                    className="spinner-border text-danger"
                    role="status"
                    style={{ width: "3rem", height: "3rem" }}
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </Fragment>
    );
};

export default LazyLoader;