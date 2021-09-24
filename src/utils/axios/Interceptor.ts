import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { alertMsg } from '../antd/antd'

// axios instance
const axiosInstance = axios.create({
    timeout: 5000
})

/**
 * 请求拦截
 * @date 2021年8月9日19:44:07
 */
axiosInstance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    // todo
    return config
})

/**
 * 响应拦截
 * @date 2021年8月9日19:44:12
 */
axiosInstance.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    // todo
    console.log(response)
    return response.data
}, (err: any) => {
    alertMsg('error', "请求超时，服务器异常")
    Promise.reject(err)
})

export default axiosInstance