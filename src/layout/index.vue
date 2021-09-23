
<script lang="ts" setup>
import { Layout } from 'ant-design-vue'
import PageHeader from './PageHeader/PageHeader.vue'
import PageContent from './PageContent/PageContent.vue'
import PageSider from './PageSider/PageSider.vue'

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