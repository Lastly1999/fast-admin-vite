import httpRequest from "@/utils/axios/service"
import {HttpResponse} from "../model/request/public"

/**
 * 获取系统图标下拉列表
 */
export const getSystemIcons = (): Promise<HttpResponse> => {
    return httpRequest({
        method: "get",
        path: "/icons/icons"
    })
}