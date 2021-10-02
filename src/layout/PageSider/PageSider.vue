
<script lang="ts" setup>
import { useStore } from 'vuex'
import { Layout } from 'ant-design-vue'
import config from "@/config/system.config"

// layout tools
import NavMenu from '@/components/NavMenu/NavMenu.vue'
const Sider = Layout.Sider

const store = useStore()
const roleMenus = store.getters['authModule/getSysMenus']

</script>

<template>
    <Sider theme="dark" class="system-sider" width="220" collapsible>
        <div class="logo">
            <div class="logo-container" style>
                <img width="50" height="50" :src="config.logo" />
            </div>
            <div class="logo-title">Fast Admin</div>
        </div>
        <NavMenu :list="roleMenus" />
    </Sider>
</template>

<style lang="scss" scoped>
.system-sider {
    box-shadow: 0 0 10px 0px #cbc9d2;
    .logo {
        padding: 10px;
        text-align: center;
        display: flex;
        align-items: center;
        .logo-container {
            width: 50px;
            height: 50px;
            overflow: hidden;
            border-radius: 50%;
            display: inline-block;
        }
        .logo-title {
            font-size: 20px;
            color: #fff;
            font-size: 20px;
            margin: 0 0 0 12px;
            font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
            font-weight: 600;
            vertical-align: middle;
            display: inline-block;
            color: #fff;
        }
    }
}
</style>