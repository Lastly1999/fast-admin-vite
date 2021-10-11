<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { SettingOutlined, ExpandOutlined, SearchOutlined, PoweroffOutlined } from '@ant-design/icons-vue';

const router = useRouter()
const visible = ref<boolean>(false)
const hide = () => {
    localStorage.removeItem('auth-token')
    router.push("/login")
    visible.value = false;
}

</script>
<template>
    <div class="system-setup">
        <div class="setup-item">
            <ExpandOutlined />
        </div>
        <div class="setup-item">
            <SearchOutlined />
        </div>
        <a-popover v-model:visible="visible" placement="bottom" trigger="click">
            <template #content>
                <a-popconfirm title="你确认要注销系统吗？" ok-text="是的" cancel-text="算了吧" @confirm="hide">
                    <div class="setup-select-item">
                        <PoweroffOutlined />
                        <span class="setup-select-item-title">注销系统</span>
                    </div>
                </a-popconfirm>
            </template>
            <template #title>
                <div>
                    <SettingOutlined />
                    <span class="setup-select-title">系统设置</span>
                </div>
            </template>
            <div class="setup-item">
                <SettingOutlined />
            </div>
        </a-popover>
    </div>
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>