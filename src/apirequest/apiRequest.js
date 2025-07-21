import axios   from "axios";
import {showSuccess, showWarning} from "../helper/AlertHelper.js";

import {hideLoader, showLoader} from "../redux/state-slice/settingSlice.js";
import store from "../redux/store/store.js";

const BASE_URL = "https://task-manger-rest-api-project.onrender.com/api/v1";

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
