import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://makecom.herokuapp.com/api/"
})