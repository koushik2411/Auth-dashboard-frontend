import axios from "axios";

const API = axios.create({
    baseURL: "https://auth-dashboard-be.onrender.com/",
});

export const signupUser = (data) => API.post("/signup", data);
export const loginUser = (data) => API.post("/login", data);
