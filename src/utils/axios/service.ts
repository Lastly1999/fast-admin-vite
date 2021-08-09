import interceptor from "./Interceptor"
import {AxiosResponse} from "axios"
import {RequestOptions} from "../../typings/utils/axios/axios.option";

const api_url = process.env.VUE_APP_API_URL
const api_base = process.env.VUE_APP_API_BASE

/**
 * 服务层底层请求
 * @param options
 */
const httpRequest = <T>(options: RequestOptions<T>): Promise<any> => {
    return new Promise((resolve, reject) => {
        interceptor({
            method: options.method,
            url: `${api_url}${api_base}${options.path}`,
            data: options.data
        }).then((res: AxiosResponse<any>) => {
            resolve(res)
        }).catch((err: any) => {
            reject(err)
        })
    })
}

export default httpRequest