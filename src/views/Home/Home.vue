<template>
    <el-container style="height:100%">
        <el-aside width="250px">
            <NavMenu/>
        </el-aside>
        <el-container>
            <el-header class="fast-header">
                <div class="setup-container">
                    <FastBreadcrumb/>
                </div>
            </el-header>
            <el-container>Main</el-container>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>
<script lang="ts">
import {defineComponent} from "vue"

// components
import NavMenu from '@/components/NavMenu/NavMenu.vue'
import FastBreadcrumb from "@/components/FastBreadcrumb/FastBreadcrumb.vue"

export default defineComponent({
    components: {
        NavMenu,
        FastBreadcrumb
    },
    setup() {
    },
})
</script>
<style lang="scss">
@import "./home.scss";
</style>
