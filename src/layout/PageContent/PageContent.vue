
<script lang="ts" setup>

</script>

<template>
    <a-layout-content class="system-content">
        <router-view v-slot="{ Component, route }">
            <keep-alive v-if="route.meta.keepAlive">
                <component :is="Component" />
            </keep-alive>
            <component v-else :is="Component" />
        </router-view>
    </a-layout-content>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>