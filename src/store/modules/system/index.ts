import { Store } from "vuex"

// apis
import { getSystemIcons } from "@/services/system/sys"
import { getAllSysMenus } from "@/services/auth"

export type IconItem = {
    id: number;
    iconName: string;
}

export type MenuItem = {
    CreatedAt: string;
    DeletedAt: null | string;
    Role: null
    UpdatedAt: null | string;
    icon: null | string;
    id: number;
    label: null | string;
    pId: number;
    path: string;
}

export type SystemState = {
    iconSelectDataSource: IconItem[],
    systemMenus: MenuItem[]
}

export type SystemModule = {
    namespaced: boolean;
    state: () => SystemState;
    getters: {
        getSysIcons(state: SystemState): IconItem[],
        getSysMenus(state: SystemState): MenuItem[]
    };
    actions: {
        API_GET_SYS_ICONS(action: Store<any>): void,
        API_GET_SYS_MENUS(action: Store<any>): void
    };
    mutations: {
        SET_SYS_ICONS(state: SystemState, payload: IconItem[]): void,
        SET_SYS_MENUS(state: SystemState, payload: MenuItem[]): void
    };
}

export const systemModule: SystemModule = {
    namespaced: true,
    state: () => {
        return {
            iconSelectDataSource: [],
            systemMenus: []
        }
    },
    getters: {
        getSysIcons(state: SystemState) {
            return state.iconSelectDataSource
        },
        getSysMenus(state: SystemState) {
            return state.systemMenus
        }
    },
    actions: {
        /**
         * 请求系统图标列表
         * @param param0 
         */
        async API_GET_SYS_ICONS({ commit }: Store<any>) {
            const { data, code } = await getSystemIcons()
            if (code === 200) commit('SET_SYS_ICONS', data.icons)
        },
        /**
         * 请求系统全部菜单列表
         * @param param0 
         */
        async API_GET_SYS_MENUS({ commit }: Store<any>) {
            const { data, code } = await getAllSysMenus()
            if (code === 200) commit('SET_SYS_ICONS', data.icons)
        },
    },
    mutations: {
        // set icons
        SET_SYS_ICONS(state: SystemState, payload: IconItem[]) {
            state.iconSelectDataSource.length === 0 && (state.iconSelectDataSource = payload)
        },
        // set menus
        SET_SYS_MENUS(state: SystemState, payload: MenuItem[]) {
            state.systemMenus.length === 0 && (state.systemMenus = payload)
        }
    }
}

export default systemModule