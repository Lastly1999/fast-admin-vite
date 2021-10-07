import httpRequest from "@/utils/axios/service"
import {HttpResponse} from "../model/request/public"
import {listParams} from "@/services/model/response/public"


/**
 * 获取系统用户列表
 * @param data
 */
export const getUsers = (data: listParams): Promise<HttpResponse> => {
    return httpRequest({
        method: "get",
        path: "/user/user"
    })
}