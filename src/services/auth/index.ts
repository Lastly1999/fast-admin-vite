import httpRequest from "@/utils/axios/service"
import {HttpResponse} from "../model/request/public"
import {MenuInfo} from "@/services/model/response/role"

/**
 * 鉴权登录
 * @param data
 */
export const checkAuthUser = <T>(data: T): Promise<HttpResponse> => {
    return httpRequest({
        method: 'post',
        path: '/auth/login',
        data
    })
}

/**
 * 请求图形验证码
 */
export const getImgsAuthCode = (): Promise<HttpResponse> => {
    return httpRequest({
        method: "get",
        path: "/auth/code"
    })
}

/**
 * 获取系统权限菜单
 * 不需要请求参数 后端会在token内获取用户的权限id
 * @param id
 */
export const getSysMenus = (id: number | string | undefined): Promise<HttpResponse> => {
    return httpRequest({
        method: 'get',
        path: `/auth/menu`
    })
}

/**
 * 获取全部系统权限菜单
 */
export const getAllSysMenus = (): Promise<HttpResponse> => {
    return httpRequest({
        method: 'get',
        path: `/menu/menu`
    })
}

/**
 * 获取用户所持系统ids
 * @param userId
 */
export const getUserMenuIds = (): Promise<HttpResponse> => {
    return httpRequest({
        method: 'get',
        path: `/auth/menuids`
    })
}

/**
 * 添加系统菜单
 */
export const putSystemMenu = (data: MenuInfo) => {
    return httpRequest({
        method: "put",
        path: "/menu/menu",
        data
    })
}

/**
 * 删除系统菜单
 */
export const deleteSystemMenu = (menuId: number) => {
    return httpRequest({
        method: "delete",
        path: `/menu/menu/${menuId}`
    })
}