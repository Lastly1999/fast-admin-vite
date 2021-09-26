import { RouteRecordRaw } from "vue-router"
import Layout from '@/layout/index.vue'

/**
 * role routes config
 * @author lastly
 * @date 2021年8月28日23:31:22
 */
const roleRoutesConf: RouteRecordRaw = {
    path: "/role",
    name: "Role",
    component: Layout,
    meta: {
        title: "权限管理"
    },
    children: [
        {
            path: "permissions",
            name: "role",
            component: () => import("@/views/Main/Role/Permissions/Permissions.vue"),
            meta: {
                title: "角色权限",
                role: "ROLE:ROLE:PERMISSIONS"
            }
        }
    ]
}

export default roleRoutesConf