import httpRequest from "utils/axios/service";

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
export const getSysMenus = (id: number | string) => {
    return httpRequest({
        method: 'get',
        path: `/auth/sys/${id}`
    })
}