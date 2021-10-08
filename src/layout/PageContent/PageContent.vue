
<script lang="ts" setup>
// import { ref } from "vue"
// import { onBeforeRouteUpdate } from "vue-router"

// const transitionName = ref('slide-left')
// onBeforeRouteUpdate((to, from) => {
//     const { index: toIndex } = to.meta
//     const { index: fromIndex } = from.meta
//     console.log(toIndex, fromIndex, toIndex < fromIndex)
//     transitionName.value = toIndex < fromIndex ? 'slide-right' : 'slide-left'
//     console.log(transitionName.value)
//     isname.value = to.name
// })
</script>

<template>
    <a-layout-content class="system-content">
        <!-- 使用动态过渡名称 -->
        <router-view appear v-slot="{ Component, route }">
            <transition name="slide-fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </a-layout-content>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>