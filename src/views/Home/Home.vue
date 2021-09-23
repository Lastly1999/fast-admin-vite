<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider>
            <NavMenu :list="roleMenus" />
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0" />
            <a-layout-content style="margin: 0 16px">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import NavMenu from '@/components/NavMenu/NavMenu.vue'

export default defineComponent({
    components: {
        NavMenu,
    },
    setup() {
        const store = useStore()

        onMounted(() => {
            console.log(store)
        })

        const roleMenus = reactive([])
        return {
            roleMenus,
        }
    },
})
</script>
<style lang="scss">
@import './home.scss';
</style>
