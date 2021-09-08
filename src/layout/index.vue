<template>
    <Layout class="system-container">
        <PageSider />
        <Layout>
            <PageHeader></PageHeader>
            <PageContent></PageContent>
        </Layout>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'
import PageHeader from './PageHeader/PageHeader.vue'
import PageContent from './PageContent/PageContent.vue'
import PageSider from './PageSider/PageSider.vue'

export default defineComponent({
    components: {
        Layout,
        PageContent,
        PageHeader,
        PageSider,
    },
    setup() {
        return {}
    },
})
</script>
<style lang="less">
@import './index.less';
</style>