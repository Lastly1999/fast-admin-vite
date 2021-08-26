// typings
export type IUserState = {
    userInfo: IUserInfo
}

export type IUserInfo = {
    userName: string | undefined;
    userAvatar: string | undefined;
}

/**
 * user state vuex
 * @author lastly
 * @date 2021年8月10日00:40:57
 */
const userState: IUserState = {
    userInfo: {
        userName: "",
        userAvatar: "",
    }
}

export default userState