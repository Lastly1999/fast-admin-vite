
<script lang="ts" setup>
import { useStore } from 'vuex'
import { Layout } from 'ant-design-vue'

// layout tools
import NavMenu from '@/components/NavMenu/NavMenu.vue'
const Sider = Layout.Sider

const store = useStore()
const roleMenus = store.getters['sysModule/getSysMenus']

</script>

<template>
    <Sider theme="dark" class="system-sider" width="220" collapsible>
        <NavMenu :list="roleMenus" />
    </Sider>
</template>

<style scoped>
.system-sider {
    box-shadow: 0 0 10px 0px #cbc9d2;
}
</style>