import {createApp} from "vue"
import App from "./App"

// antd
import Antd from 'ant-design-vue'
import "./theme/fast-theme.less"

// 路由实例
import router from "@/router"

// 实例app
const app = createApp(App)

// 中间件使用
app.use(router)
// antd
app.use(Antd)

// 挂载
app.mount("#app")
