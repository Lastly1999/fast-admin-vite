import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        component: () => import("views/Login/Login.vue"),
    },
    {
        path: "/home",
        component: () => import("views/Home/Home.vue"),
    },
]

// 构建路由栈
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router