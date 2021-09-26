import httpRequest from "@/utils/axios/service";
import {HttpResponse} from "../model/request/public";
import {RoleForm} from "../model/response/role"

/**
 * 获取角色列表
 * @param data
 */
export const getRoles = (): Promise<HttpResponse> => {
    return httpRequest({
        method: 'get',
        path: '/role/role'
    })
}

/**
 * 修改角色信息
 * @param data
 * @returns
 */
export const editRole = (data: RoleForm): Promise<HttpResponse> => {
    return httpRequest({
        method: 'patch',
        path: '/role/role',
        data
    })
}

/**
 * 删除角色信息
 * @param id
 */
export const delRole = (id: number) => {
    return httpRequest({
        method: 'delete',
        path: `/role/role/${id}`
    })
}

export const appendRole = (data: RoleForm) => {
    return httpRequest({
        method: 'put',
        path: `/role/role`,
        data
    })
}