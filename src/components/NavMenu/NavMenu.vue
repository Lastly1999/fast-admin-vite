<template>
    <el-menu
        :default-active="activeIndex2"
        @select="handleSelect"
        background-color="#30426a"
        text-color="#b2bfdc"
        active-text-color="#fff"
    >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
            <template #title>我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template #title>选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
    setup() {
        const activeIndex2 = ref('1')
        const handleSelect = (key: string, keyPath: string) => {
            console.log(key, keyPath);
        }
        return {
            handleSelect,
            activeIndex2
        };
    }
})
</script>