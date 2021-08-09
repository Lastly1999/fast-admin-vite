import {Store} from 'vuex'

// typings
export type IUserActions = {
    SET_USER_INFO: (state: Store<any>, data?: any) => void;
}

/**
 * user actions vuex
 * @author lastly
 * @date 2021年8月10日00:44:06
 */
export const userActions: IUserActions = {
    SET_USER_INFO({commit}, data?: any): void {
        commit("SET_USER_INFO", data)
    }
}