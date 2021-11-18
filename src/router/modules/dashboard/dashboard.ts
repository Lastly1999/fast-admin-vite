import { RouteRecordRaw } from 'vue-router'
import Layout from "@/layout/index.vue"

/**
 * dashboard routes config
 * @author lastly
 * @date 2021年8月28日23:27:44
 */
const dashboardRoutesConf: RouteRecordRaw = {
    path: "/dashboard",
    name: "Dashboard",
    component: Layout,
    meta: {
        title: "首页"
    },
    children: [
        {
            path: "panel",
            name: "panel-index",
            component: () => import("@/views/Main/dashboard/Panel/Panel.vue"),
            meta: {
                title: "面板",
                role: "HOME:PANEL:VIEW"
            }
        },
        {
            path: "info",
            name: "dashboard-info",
            component: () => import("@/views/Main/dashboard/Info/Info.vue"),
            meta: {
                title: "控制台"
            }
        }
    ]
}

export default dashboardRoutesConf