import {Store} from "vuex";

export type IUserMutations = {
    SET_USER_INFO: (state: Store<any>, data?: any) => void;
}
/**
 * user mutations
 * @date 2021年8月10日01:02:49
 * @author lastly
 */
export const userMutations: IUserMutations = {
    SET_USER_INFO({state}, data) {
        state.userInfo = data
    }
}