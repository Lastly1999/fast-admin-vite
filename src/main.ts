import { createApp } from "vue"
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
import { processChromeConole } from "./runtime.console"

// symbols
import { MOM_ENT } from "@/symbol"

import QueryGroup from "@/components/QueryGroup/QueryGroup.vue"
import FModal from "@/components/FModal/FModal.vue"

// 路由实例
import router from "@/router"

function installGlobalComponents(app: any) {
    // global components installs 
    app.component('QueryGroup', QueryGroup)
    app.component(MOM_ENT, FModal)
}

function bootstrap() {
    const app = createApp(App)
    app.provide("moment", moment)
    installGlobalComponents(app)
    app.use(router)
    app.use(Antd)
    app.use(store)
    app.use(animate)
    app.mount("#app")
    processChromeConole()
}

bootstrap()
