import { createApp } from "vue"
import App from "./App"

// antd
import Antd from 'ant-design-vue'
import "./theme/fast-theme.less"

// vuex
import store from '@/store'

import animate from "animate.css"

// 路由实例
import router from "@/router"

function bootstrap() {
    const app = createApp(App)
    app.use(router)
    app.use(Antd)
    app.use(store)
    app.use(animate)
    app.mount("#app")
}

bootstrap()
