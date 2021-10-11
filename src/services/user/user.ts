import httpRequest from "@/utils/axios/service"
import { HttpResponse } from "../model/request/public"
import { listParams } from "@/services/model/response/public"
import { RegisterUserForm, UserAsRoleParams } from "../model/response/user"


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

/**
 * 修改系统用户信息
 * @param data 
 * @returns 
 */
export const editSystemUser = (data: RegisterUserForm) => {
    return httpRequest({
        method: "patch",
        path: `/user/user`,
        data
    })
}

/** 
 * 获取系统用户角色列表
 * @param userId 
 */
export const getSystemUserRoles = (userId: number) => {
    return httpRequest({
        method: "get",
        path: `/user/role/${userId}`,
    })
}

/**
 * 新增用户关联角色
 * @param data 
 */
export const PatchUserAsRole = (data: UserAsRoleParams) => {
    return httpRequest({
        method: "patch",
        path: `/user/role`,
        data
    })
}