import httpRequest from "@/utils/axios/service"

/**
 * 鉴权登录
 * @param data
 */
export const checkAuthUser = <T>(data: T) => {
    return httpRequest({
        method: 'post',
        path: '/auth/login',
        data
    })
}

/**
 * 获取系统权限菜单
 * @param id
 */
export const getSysMenus = (id: number | string | undefined) => {
    return httpRequest({
        method: 'get',
        path: `/auth/sys/${id}`
    })
}

/**
 * 获取全部系统权限菜单
 */
export const getAllSysMenus = () => {
    return httpRequest({
        method: 'get',
        path: `/auth/sys`
    })
}

/**
 * 获取用户所持系统ids
 * @param userId
 */
export const getUserMenuIds = (userId: number | string | undefined) => {
    return httpRequest({
        method: 'get',
        path: `/auth/menu/${userId}`
    })
}