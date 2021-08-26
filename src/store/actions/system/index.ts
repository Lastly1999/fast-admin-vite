import { Store } from 'vuex'

// typings
export type ISystemActions = {
    SET_SYS_MENUS: (state: Store<any>, data?: any) => void;
}

/**
 * system actions vuex
 * @author lastly
 * @date 2021年8月10日00:44:06
 */
export const systemActions: ISystemActions = {
    SET_SYS_MENUS({ commit }, data?: any): void {
        commit("SET_SYSTEM_MENU", data)
    }
}