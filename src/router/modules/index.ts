import { RouteRecordRaw } from "vue-router"

// router modules
import dashboardRoutesConf from "./dashboard/dashboard"
import roleRoutesConf from "./role/role"

const basicRoutes: RouteRecordRaw[] = [
    roleRoutesConf,
    dashboardRoutesConf
]

export default basicRoutes