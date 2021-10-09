import httpRequest from "@/utils/axios/service"
import { HttpResponse } from "../model/request/public"
import { listParams } from "@/services/model/response/public"
import { RegisterUserForm } from "../model/response/user"


/**
 * 获取系统用户列表
 * @param data
 */
export const getUsers = (data: listParams): Promise<HttpResponse> => {
    return httpRequest({
        method: "post",
        path: "/user/user",
        data
    })
}

/**
 * 新增系统用户
 * @param data 
 * @returns 
 */
export const createSystemUser = (data: RegisterUserForm): Promise<HttpResponse> => {
    return httpRequest({
        method: "put",
        path: "/user/user",
        data
    })
}

/**
 * 删除系统用户
 * @param userId 
 */
export const deleteSystemUser = (userId: number) => {
    return httpRequest({
        method: "delete",
        path: `/user/user/${userId}`
    })
}