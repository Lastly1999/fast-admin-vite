import axios, {AxiosRequestConfig, AxiosResponse} from "axios"
import {alertMsg} from '../antd/antd'
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
    requestHandler(response)
    console.log()
    return response.data
}, (err: any) => {
    const {data} = err.response
    // 错误处理
    errorsHandler(data)
    // 异常抛出
    return Promise.reject(err.response)
})

function requestHandler(response: AxiosResponse<any>) {
    let httpStr = `[http-info] request-url:${JSON.stringify(response.config.url)} method:${response.config.method}`
    console.log(httpStr)
}

// 错误处理
function errorsHandler(data: any) {
    let errorMsg = null
    switch (data.code) {
        case 20001:
            errorMsg = data.data
            router.push('/login').then(r => r)
        case 20002:
            errorMsg = data.data
            router.push('/login').then(r => r)
        case 500:
            errorMsg = data.data
    }
    alertMsg("error", data.data)
}

export default axiosInstance