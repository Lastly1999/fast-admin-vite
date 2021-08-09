import {createApp, Component} from "vue"
import App from "./App"

// fast-admin 自定义组件
import layouts from '@/layout'

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

// layout 统一注册 配置组件别名
console.log(layouts)
layouts.map((item: Component) => {
    console.log(`Fast${(item.name as string)}`)
    app.component(`Fast${(item.name as string)}`, item)
})

// 挂载
app.mount("#app")
