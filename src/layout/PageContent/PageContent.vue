
<script lang="ts" setup>

</script>

<template>
    <div class="system-content">
        <router-view v-slot="{ Component, route }">
            <!-- <transition name="fade" mode="out-in"> -->
                <keep-alive v-if="route.meta.keepAlive">
                    <component :is="Component" />
                </keep-alive>
                <component v-else :is="Component" />
            <!-- </transition> -->
        </router-view>
    </div>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>