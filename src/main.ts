import {createApp} from "vue"
import App from "./App"

// antd
import Antd from 'ant-design-vue'
import "./theme/fast-theme.less"

// vuex
import store from '@/store'
// animate
import animate from "animate.css"
// moment
import moment from "moment"

import "font-awesome/css/font-awesome.min.css"

// 路由实例
import router from "@/router"

function bootstrap() {
    const app = createApp(App)
    app.provide("moment", moment)
    app.use(router)
    app.use(Antd)
    app.use(store)
    app.use(animate)
    app.mount("#app")
}

bootstrap()
