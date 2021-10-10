<script lang="ts" setup>
import { onMounted } from "vue"
import { useStore } from "vuex"
import { Layout } from "ant-design-vue"

import PageHeader from './PageHeader/PageHeader.vue'
import PageContent from './PageContent/PageContent.vue'
import PageSider from './PageSider/PageSider.vue'


onMounted(() => {
    loadSystemConf()
})

const store = useStore()

/**
 * 处理一些系统级的参数请求
 */
const loadSystemConf = () => {
    // 系统图标下拉列表参数
    store.dispatch("systemModule/API_GET_SYS_ICONS")
    // 系统菜单树
    store.dispatch("systemModule/API_GET_SYS_MENUS")
    // 系统角色列表
    store.dispatch("systemModule/API_GET_SYS_ROLES")
}

</script>
<template>
    <Layout class="system-container">
        <PageSider />
        <Layout>
            <PageHeader></PageHeader>
            <PageContent></PageContent>
        </Layout>
    </Layout>
</template>

<style lang="less">
@import "./index.less";
</style>