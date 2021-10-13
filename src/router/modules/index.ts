import { RouteRecordRaw } from "vue-router"

// router modules
import dashboardRoutesConf from "@/router/modules/dashboard/dashboard"
import roleRoutesConf from "@/router/modules/role/role"
import systemRoutesConf from "@/router/modules/system/system"

const basicRoutes: RouteRecordRaw[] = [
    roleRoutesConf,
    dashboardRoutesConf,
    systemRoutesConf,
]

export default basicRoutes