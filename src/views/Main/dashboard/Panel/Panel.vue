<script lang="ts" setup>
import { onMounted, ref } from "vue"
// components
import WorkInfoPanel from './components/WorkInfoPanel/WorkInfoPanel.vue'
import TodoPanel from "./components/TodoPanel/TodoPanel.vue"
import WorkBannerPanel from "./components/WorkBannerPanel/WorkBannerPanel.vue"
import TimeLinePanel from "./components/TimeLinePanel/TimeLinePanel.vue"
import QuickMenusPanel from "./components/QuickMenusPanel/QuickMenusPanel.vue"

const panelLoading = ref(true)

onMounted(() => {
    setTimeout(() => {
        panelLoading.value = false
    }, 500)
})

</script>

<template>
    <a-skeleton active :loading="panelLoading">
        <a-row :gutter="[10, 10]" justify="start" :wrap="true">
            <a-col :span="18">
                <WorkInfoPanel />
                <TodoPanel />
                <TimeLinePanel />
            </a-col>
            <a-col :span="6">
                <WorkBannerPanel />
                <QuickMenusPanel />
            </a-col>
        </a-row>
    </a-skeleton>
</template>
