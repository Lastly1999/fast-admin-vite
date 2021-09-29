import {
    createRouter,
    createWebHistory,
    RouteLocationNormalized,
    NavigationGuardNext,
    NavigationFailure,
    Router,
    RouteRecordRaw
} from "vue-router"
// import { routesConf } from '@/config/router.config'
import routesStoreModules from "./modules"
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// vuex
import store from '@/store'

// 路由白名单表
const routerAuthList = ["HOME:PANEL:VIEW"]



export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        component: () => import("views/Login/Login.vue"),
    },
    ...routesStoreModules
]

// 构建路由栈
const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})


const authEachArrays = (routesStore: RouteRecordRaw[]) => {
    const each = () => {
        routesStore.map((item: RouteRecordRaw) => {
            // 增加权限标识
            if (routerAuthList.includes(item.meta?.role as string)) {
                (item as any).isAuth = true
            } else {
                (item.meta as any).isAuth = false
            }
            if (item.children) {
                authEachArrays(item.children)
            }
        })
    }
    each()
}


// todo 权限验证在除开登录页之外pages处理
// 进行用户id请求权限菜单操作
// await store.dispatch('sysModule/API_GET_SYS_MENUS', 1)
// const roleMenus = JSON.parse(JSON.stringify(store.getters['sysModule/getSysMenus']))
// authEachArrays(routesStoreModules)

router.beforeEach(async (to: RouteLocationNormalized, form: RouteLocationNormalized, next: NavigationGuardNext) => {
    // 如果是登录页 默认放行 不进行权限验证
    if (to.path === '/login') {
        next()
    } else {
        const menus = store.getters["sysModule/getSysMenus"]
        // 当未请求过权限菜单时 再进行请求
        if (!menus) await store.dispatch('sysModule/API_GET_SYS_MENUS')
        next()
    }
    // nprogress start...
    nprogress.start()
})


router.afterEach((to: RouteLocationNormalized, form: RouteLocationNormalized, next: void | NavigationFailure | undefined) => {
    // nprogress end...
    nprogress.done()
})

export default router
