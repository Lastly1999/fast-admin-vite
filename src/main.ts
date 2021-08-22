import {createApp, Component} from "vue"
import App from "./App"

// fast-admin 自定义组件
import layouts from '@/layout'

// element-plus
import ElementPlus from "element-plus"
import "./element-variables.scss"

// 路由实例
import router from "@/router"

// 实例app
const app = createApp(App)

// 中间件使用
app.use(router)
app.use(ElementPlus)

// layout 统一注册 配置组件别名
layouts.map((item: Component) => {
    app.component(`Fast${(item.name as string)}`, item)
})

// 挂载
app.mount("#app")
