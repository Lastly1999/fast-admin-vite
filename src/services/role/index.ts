import httpRequest from "utils/axios/service";

/**
 * 获取角色列表
 * @param data
 */
export const getRoles = () => {
    return httpRequest({
        method: 'get',
        path: '/role/role'
    })
}
