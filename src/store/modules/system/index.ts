import {Store} from "vuex"

// apis
import {getSystemIcons} from "@/services/system/sys"

export type IconItem = {
    id: number;
    iconName: string;
}
export type SystemState = {
    iconSelectDataSource: IconItem[]
}

export type SystemModule = {
    namespaced: boolean;
    state: () => SystemState;
    getters: {
        getSysIcons(state: SystemState): IconItem[]
    };
    actions: {
        API_GET_SYS_ICONS(action: Store<any>): void
    };
    mutations: {
        SET_SYS_ICONS(state: SystemState, payload: IconItem[]): void
    };
}

export const systemModule: SystemModule = {
    namespaced: true,
    state: () => {
        return {
            iconSelectDataSource: []
        }
    },
    getters: {
        getSysIcons(state: SystemState) {
            return state.iconSelectDataSource
        }
    },
    actions: {
        async API_GET_SYS_ICONS({commit}: Store<any>) {
            const {data, code} = await getSystemIcons()
            if (code === 200) commit('SET_SYS_ICONS', data.icons)
        }
    },
    mutations: {
        SET_SYS_ICONS(state: SystemState, payload: IconItem[]) {
            state.iconSelectDataSource.length === 0 && (state.iconSelectDataSource = payload)
        }
    }
}

export default systemModule