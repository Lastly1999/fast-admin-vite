import userState from "./user"
import systemState from "./system"

// 状态仓库 统一导出 如果新增模块需在此处注册
export default {
    ...userState,
    ...systemState
}