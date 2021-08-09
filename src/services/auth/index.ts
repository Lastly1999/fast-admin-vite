import httpRequest from "utils/axios/service";

/**
 * 鉴权登录
 * @param data
 */
export const checkAuthUser = <T>(data: T) => {
    return httpRequest({
        methods: 'post',
        path: '/auth/login',
        data
    })
}