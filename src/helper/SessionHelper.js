


// This file contains helper functions for managing session tokens in local storage.
export  const setToken = (token) => {
    localStorage.setItem("token", token);
}

//getToken function retrieves the token from local storage
export  const getToken = () => {
    return localStorage.getItem("token");

}
