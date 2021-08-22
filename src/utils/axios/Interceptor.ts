import axios, {AxiosRequestConfig, AxiosResponse} from "axios"

import {notice} from '@/utils/element/message'

// axios instance
const axiosInstance = axios.create({
    timeout: 10000
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
    notice({
        type: 'error',
        title: "请求错误",
        message: JSON.stringify(err.message)
    })
})

export default axiosInstance