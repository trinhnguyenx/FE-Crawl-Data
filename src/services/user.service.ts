import axiosApiInstance from "../api"
import { ILogin,ISignUp, ISendMail, IUpdate } from "../types/user"
import { IJob } from "../types/auth"
import axios from "axios"
axios.defaults.URL = import.meta.env.VITE_API_URL

export const refreshAccessToken = async (): Promise<any> => {
    const refresh_token = localStorage.getItem("refresh_token")
    const data = {
        refresh_token: refresh_token,
    }
    return await axios.post("/auth/refresh", data)
}
export const loginApi = async (data: ILogin) => {
    return await axiosApiInstance.post("/auth/login", data)
}
export const registerApi = async (data: ISignUp) => {
    return await axiosApiInstance.post("/auth/register", data)
}
export const sendMailApi = async (data: ISendMail) => {
    return await axiosApiInstance.post("/auth/sendMail", data )
}
export const forgotpassword = async (email: string) => {
    return await axiosApiInstance.post("/auth/forgotpassword", {email} )
}
export const resetpassword = async (email: string, password: string) => {
    return await axiosApiInstance.post("/auth/resetpassword", {email,password} )
}
export const deleteAPI = async (id: string) => {
    return await axiosApiInstance.delete(`/auth/${id}`)
}
export const getJobAll = async () => {
    return await axiosApiInstance.get('/app/dataCrawl');
}
export const getJobID = async (id: string) => {
    return await axiosApiInstance.get(`/app/dataCrawl/${id}`)
}
export const getJobTitle = async () => {
    return await axiosApiInstance.get("/app/jobtitle")
}
export const getJobFilter = async (keyFilter1: string,keyFilter2: string,keyFilter3: string) => {
    return await axiosApiInstance.get(`/app/filterjob?key1=${keyFilter1}&key2=${keyFilter2}&key3=${keyFilter3}`)
}
export const getInfo = async () => {
    return await axiosApiInstance.get("/users/me")
}
export const getInfoAll = async () => {
    return await axiosApiInstance.get("/users/")
}
export const updateInfo = async (data: IUpdate) => {
    return await axiosApiInstance.put(`/users/me`, data)
}
export const updateJob = async (id: string, data: IJob) => {
    return await axiosApiInstance.put(`/app/updatejob/${id}`, data)
}

