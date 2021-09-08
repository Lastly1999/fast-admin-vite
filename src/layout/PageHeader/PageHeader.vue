<template>
    <PageHeader class="system-header">
        <Breadcrumb></Breadcrumb>
    </PageHeader>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'

// components
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.vue"

export default defineComponent({
    components: {
        PageHeader: Layout.Header,
        Breadcrumb
    },
    setup() {
        return {}
    },
})
</script>
<style scoped>
.system-header {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px 0 #ccc;
}
</style>