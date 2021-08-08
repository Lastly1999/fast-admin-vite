import { createApp } from "vue"
import App from "./App"

// element-plus
import ElementPlus from "element-plus"
import "@/assets/theme/elementTheme/index.css"

// 路由实例
import router from "@/router"

// 实例app
const app = createApp(App)

// 中间件使用
app.use(router)
app.use(ElementPlus)

// 挂载
app.mount("#app")
