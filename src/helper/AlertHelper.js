import {Slide, toast} from "react-toastify";
import Swal from "sweetalert2";
import {DeleteTask, updateTaskByStatus} from "../apirequest/apiRequest.js";

const toastConfig = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
};


export const showSuccess = (value) => {
    toast.success(`${value}`, toastConfig);
}

export const showError = (value) => {
    toast.error(`${value}`, toastConfig);
}

export const showInfo = (value) => {
    toast.info(`${value}`,toastConfig);
}

export const showWarning = (value) => {
    toast.warn(`${value}`, toastConfig);
}


//Delete Alert
export const DeleteAlert = (id) => {
   return  Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            return DeleteTask(id).then((deleteResult) => {
                return deleteResult;
            })
        }
    });
}


//update task status
export const updateTaskStatus = (id, status) => {
   return Swal.fire({
        title: "Change Status",
        input: "select",
        inputOptions: {New: "New", Complete: "Complete", Cancel: "Cancel"},
        inputValue: status,

    }).then((result) => {

       return updateTaskByStatus(id, result.value).then((res) => {
            return res;
        })
    });
}


