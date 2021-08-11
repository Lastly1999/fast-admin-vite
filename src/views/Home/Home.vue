<template>
    <el-container style="height:100%">
        <el-aside style="background-color:#30426a" width="250px">
            <NavMenu/>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-container>Main</el-container>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>
<script lang="ts">
import {defineComponent} from "vue"

// components
import NavMenu from '@/components/NavMenu/NavMenu.vue'

export default defineComponent({
    components: {
        NavMenu
    },
    setup() {
    },
})
</script>
