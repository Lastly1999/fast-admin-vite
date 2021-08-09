import axios, {AxiosRequestConfig, AxiosResponse} from "axios"

// axios instance
const axioInstance = axios.create({
    timeout: 10000
})

/**
 * 请求拦截
 * @date 2021年8月9日19:44:07
 */
axios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    // todo
    return config
})

/**
 * 响应拦截
 * @date 2021年8月9日19:44:12
 */
axios.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    // todo
    return response
})

export default axioInstance