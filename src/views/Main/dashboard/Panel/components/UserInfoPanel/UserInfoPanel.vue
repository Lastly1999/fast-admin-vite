<template>
    <div class="user-info-panel">
        <div>
            <a-avatar :size="64">
                <template #icon>
                    <UserOutlined />
                </template>
            </a-avatar>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
export default defineComponent({
    components: {
        UserOutlined,
    },
    setup() {
        return {}
    },
})
</script>
<style scoped>
.user-info-panel {
    border-radius: 6px;
    background: #fff;
    display: flex;
    padding:15px;
}
</style>