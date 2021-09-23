<template>
    <Sider theme="dark" class="system-sider" width="220" collapsible>
        <NavMenu :list="roleMenus" />
    </Sider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import { Layout } from 'ant-design-vue'

// layout tools
import NavMenu from '@/components/NavMenu/NavMenu.vue'

export default defineComponent({
    components: {
        Sider: Layout.Sider,
        NavMenu,
    },
    setup() {
        const store = useStore()
        const roleMenus = store.getters['sysModule/getSysMenus']
        return {
            roleMenus,
        }
    },
})
</script>
<style scoped>
.system-sider {
    box-shadow: 0 0 10px 0px #cbc9d2;
}
</style>