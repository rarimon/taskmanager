import {Slide, toast} from "react-toastify";

const toastConfig = {
    position: "top-right",
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

