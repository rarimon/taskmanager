import axios   from "axios";
import {showSuccess, showWarning} from "../helper/AlertHelper.js";
import {hideLoader, showLoader} from "../redux/state-slice/settingSlice.js";
import store from "../redux/store/store.js";
import {getToken, setToken} from "../helper/SessionHelper.js";
import {setCancelTasks, setCompleteTasks, setNewTasks} from "../redux/state-slice/taskSlice.js";
import {setSummary} from "../redux/state-slice/summarySlice.js";

const Token=getToken();
const BASE_URL = "https://task-manger-rest-api-project.onrender.com/api/v1";

// Check if token is available
let Headers = {
    headers: {token: Token}
}

//user registration
export const RegisterUser = async (userData) => {
    try {
        // show loader
        store.dispatch(showLoader());

        // Validate user data
        const response = await axios.post(`${BASE_URL}/Registration`, userData);
        if (response.data.status === "fail") {
            const msg = response.data.message || "Registration failed";
            showWarning(msg);

            // Hide loader
            store.dispatch(hideLoader());

            throw new Error(msg);
        }

        showSuccess("Registration successful!");
        // Hide loader
        store.dispatch(hideLoader());
        return response.data;

    } catch (error) {
        const errorMsg = error?.response?.data?.message || error.message || "Something went wrong!";
        showWarning(errorMsg);
        // Hide loader
        store.dispatch(hideLoader());
        throw error;
    }

}

//user login
export const LoginUser = async (userData) => {
    try {
        // show loader
        store.dispatch(showLoader());

        // Validate user data
        const response = await axios.post(`${BASE_URL}/Login`, userData);
        if (response.data.status === "error") {
            const msg = response.data.message || "Login failed";
            showWarning(msg);

            // Hide loader
            store.dispatch(hideLoader());

            throw new Error(msg);
        }

        showSuccess("Login successful!");
        // Hide loader
        store.dispatch(hideLoader());
        // Store user data in localStorage
         let token = response.data.token;
         setToken(token);
        return response.data;

    } catch (error) {
        const errorMsg = error?.response?.data?.message || error.message || "Something went wrong!";
        showWarning(errorMsg);
        // Hide loader
        store.dispatch(hideLoader());
        throw error;
    }

}



//create task
export const createTask = async (userData) => {
    try {
        // show loader
        store.dispatch(showLoader());



        // Validate user data
        const response = await axios.post(`${BASE_URL}/CreateTask`, userData, Headers);
        if (response.data.status === "error") {
            const msg = response.data.message || "Task Create failed";
            showWarning(msg);

            // Hide loader
            store.dispatch(hideLoader());

            throw new Error(msg);
        }

        showSuccess("Task Create successful!");
        // Hide loader
        store.dispatch(hideLoader());

        return response.data;

    } catch (error) {
        const errorMsg = error?.response?.data?.message || error.message || "Something went wrong!";
        showWarning(errorMsg);
        // Hide loader
        store.dispatch(hideLoader());
        throw error;
    }

}


//TasklistByStatus
export const Tasklist= async (userData) => {
    try {
        // show loader
        store.dispatch(showLoader());

        // Validate user data
        const response = await axios.get(`${BASE_URL}/TaskListByStatus/${userData}`, Headers);


        if (response.data.status === "error") {
            const msg = response.data.message || "Unauthorized ";
            showWarning(msg);

            // Hide loader
            store.dispatch(hideLoader());

            throw new Error(msg);
        }

        if(response.data.status === "success") {


            const allTasks = response.data.data;
            const newTasks = allTasks.filter(task => task.status === "New");
            const completeTasks = allTasks.filter(task => task.status === "Complete");
            const CancelTasks = allTasks.filter(task => task.status === "Cancel");

            store.dispatch(setNewTasks(newTasks));
            store.dispatch(setCompleteTasks(completeTasks));
            store.dispatch(setCancelTasks(CancelTasks));


        }

        else {
            showWarning("Something went wrong!");
        }

        // Hide loader
        store.dispatch(hideLoader());

    } catch (error) {
        const errorMsg = error?.response?.data?.message || error.message || "Something went wrong!";
        showWarning(errorMsg);
        // Hide loader
        store.dispatch(hideLoader());
        throw error;
    }

}




//CountTask
export const countTask= async () => {
    try {
        // show loader
        store.dispatch(showLoader());

        // Validate user data
        const response = await axios.get(`${BASE_URL}/CountTask`, Headers);

        if (response.data.status === "error") {
            const msg = response.data.message || "Unauthorized ";
            showWarning(msg);

            // Hide loader
            store.dispatch(hideLoader());

            throw new Error(msg);
        }

        if(response.status===200) {
            store.dispatch(setSummary(response.data['data']));
            // Hide loader
            store.dispatch(hideLoader());

        }

        else {
            showWarning("Something went wrong!");
        }


    } catch (error) {
        const errorMsg = error?.response?.data?.message || error.message || "Something went wrong!";
        showWarning(errorMsg);
        // Hide loader
        store.dispatch(hideLoader());
        throw error;
    }

}



//Delete Task
export const countTask= async (id) => {
    try {
        // show loader
        store.dispatch(showLoader());

        // Validate user data
        const response = await axios.get(`${BASE_URL}/DeleteTask/${id}`, Headers);

        if (response.data.status === "error") {
            const msg = response.data.message || "Unauthorized ";
            showWarning(msg);

            // Hide loader
            store.dispatch(hideLoader());

            throw new Error(msg);
        }

        if(response.status===200) {
            store.dispatch(setSummary(response.data['data']));
            // Hide loader
            store.dispatch(hideLoader());

        }

        else {
            showWarning("Something went wrong!");
        }


    } catch (error) {
        const errorMsg = error?.response?.data?.message || error.message || "Something went wrong!";
        showWarning(errorMsg);
        // Hide loader
        store.dispatch(hideLoader());
        throw error;
    }

}