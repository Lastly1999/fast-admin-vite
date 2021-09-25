import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { alertMsg } from '../antd/antd'
import router from "@/router"

// axios instance
const axiosInstance = axios.create({
    timeout: 5000
})

/**
 * 请求拦截
 * @date 2021年8月9日19:44:07
 */
axiosInstance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers['authorization'] = localStorage.getItem("system-token")
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
    const { data } = err.response
    // 错误处理
    errorsHandler(data)
    // 异常抛出
    return Promise.reject(err.response)
})

// 错误处理
function errorsHandler(data: any) {
    switch (data.code) {
        case 20001:
            alertMsg("error", data.data)
            router.push('/login')
        case 20002:
            alertMsg("error", data.data)
            router.push('/login')
    }
}

export default axiosInstance