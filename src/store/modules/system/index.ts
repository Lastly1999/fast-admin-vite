
import { Store } from 'vuex'
import { getSysMenus } from 'services/auth'

export type SystemState = {
    sysMenus: []
}

export type SysStemModule = {
    namespaced: boolean;
    state: () => SystemState;
    getters: {};
    actions: {};
    mutations: {};
}

/**
 * system config module
 * @author lastly
 * @date 2021年8月26日22:57:12
 */
const systemModule: SysStemModule = {
    namespaced: true,
    state: () => (
        {
            sysMenus: []
        }
    ),
    getters: {
        getSysMenus: (state: SystemState) => state.sysMenus
    },
    actions: {
        async API_GET_SYS_MENUS({ commit }: Store<any>, id: string | number) {
            const { code, data } = await getSysMenus(id)
            if (code === 200) commit('SET_SYS_MENUS', data.menus)
        }
    },
    mutations: {
        SET_SYS_MENUS(state: SystemState, payload: []) {
            state.sysMenus = payload
        }
    }
}

export default systemModule