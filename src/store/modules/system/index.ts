import {Store} from 'vuex'
import {getSysMenus} from 'services/auth'
import {listToTree} from "utils/loadsh/data"
import {checkAuthUser} from "@/services/auth"
import router from "@/router"
import type {LoginForm} from "@/services/model/request/public"
import Login from "@/views/Login/Login.vue";


export type UserInfo = {
    userName: string;
    id: number;
    roleId: number;
}

export type SystemState = {
    sysMenus: [];
    userInfo: UserInfo;
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
            sysMenus: [],
            userInfo: {
                userName: '',
                id: 0,
                roleId: 0
            }
        }
    ),
    getters: {
        getSysMenus: (state: SystemState) => state.sysMenus,
    },
    actions: {
        // 系统登录授权
        async API_POST_SYS_AUTH({commit}: Store<any>) {
            const {code, data} = await checkAuthUser()
            if (code === 200) {
                localStorage.setItem("system-token", data.token)
                await router.push('/dashboard/panel')
            }
        },
        // 获取权限系统菜单
        async API_GET_SYS_MENUS({commit}: Store<any>, id: string | number) {
            const {code, data} = await getSysMenus(id)
            // 转换树状结构后commit修改
            if (code === 200) commit('SET_SYS_MENUS', listToTree(data.menus))
        }
    },
    mutations: {
        SET_SYS_MENUS(state: SystemState, payload: []) {
            state.sysMenus = payload
        },
        SYS_LOGIN(state: SystemState, payload: LoginForm) {
            state.userInfo = payload
        }
    }
}

export default systemModule