import {defineComponent} from "vue"
import NavMenu from "@/components/NavMenu/NavMenu.vue"
import "./App.scss"

export default defineComponent({
    components: {
        NavMenu
    },
    render() {
        return (
            <a-layout style={{minHeight: '100vh'}}>
                <a-layout-sider>
                    <NavMenu/>
                </a-layout-sider>
                <a-layout>
                    <a-layout-header style={{background: '#fff', padding: 0}}/>
                    test
                </a-layout>
            </a-layout>
        )
    },
})