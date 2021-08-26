import { defineComponent } from "vue"
import "./App.scss"

/**
 * 首页应用主入口
 * @author lastly
 * @date 2021年8月26日21:50:29
 */
export default defineComponent({
    render() {
        return (
            <router-view />
        )
    },
})