import {Store} from "vuex"

export type ISystemMutations = {
    SET_SYSTEM_MENU: (state: Store<any>, data?: any) => void
}
/**
 * system mutations
 * @date 2021年8月10日01:02:49
 * @author lastly
 */
export const systemMutations: ISystemMutations = {
    SET_SYSTEM_MENU({state}, data) {
        state.systemMenu = data
    }
}