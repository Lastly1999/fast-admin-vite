<template>
    <PageContent class="system-content">
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
                <keep-alive v-if="route.meta.keepAlive">
                    <component :is="Component" />
                </keep-alive>
                <component :is="Component" v-else />
            </transition>
        </router-view>
    </PageContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'

export default defineComponent({
    components: {
        PageContent: Layout.Content,
    },
})
</script>
<style lang="less" scoped>
@import "./index.less";
</style>