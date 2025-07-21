import axios   from "axios";
import {showSuccess, showWarning} from "../helper/AlertHelper.js";

const BASE_URL = "https://task-manger-rest-api-project.onrender.com/api/v1";

export const RegisterUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/Registration`, userData);

        if (response.data.status === "fail") {
            const msg = response.data.message || "Registration failed";
            showWarning(msg);
            throw new Error(msg);
        }

        showSuccess("Registration successful!");
        return response.data;

    } catch (error) {
        const errorMsg = error?.response?.data?.message || error.message || "Something went wrong!";
        showWarning(errorMsg);
        throw error;
    }

}