<script lang="ts" setup>
import { onMounted, ref } from "vue"
// components
import WorkInfoPanel from './components/WorkInfoPanel/WorkInfoPanel.vue'
import TodoPanel from "./components/TodoPanel/TodoPanel.vue"
import codingImg from "@/assets/coding.png"

const panelLoading = ref(true)

onMounted(() => {
    setTimeout(() => {
        panelLoading.value = false
    }, 500)
})

</script>

<template>
    <a-skeleton active :loading="panelLoading">
        <a-row :gutter="[10, 10]" justify="start">
            <a-col :span="16">
                <WorkInfoPanel />
                <TodoPanel />
            </a-col>
            <a-col :span="8">
                <div style="background-color: #fff">
                    <img style="width:100%;" :src="codingImg" alt="#" />
                </div>
            </a-col>
        </a-row>
    </a-skeleton>
</template>
