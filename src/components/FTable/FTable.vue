<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue"

const tableHeight = ref(0)

onMounted(() => {
    nextTick(() => {
        tableHeight.value = document.getElementsByClassName('page-content')[0].clientHeight - document.getElementsByClassName('ant-table-thead')[0].clientHeight
    })
    window.onresize = () => {
        tableHeight.value = document.getElementsByClassName('page-content')[0].clientHeight - document.getElementsByClassName('ant-table-thead')[0].clientHeight
    }
})

const rowClassName = (record: any, index: number) => {
    return index % 2 === 1 ? 'table-striped' : null
}

</script>
<template>
    <a-table
        class="ant-table-striped"
        {...$props}
        :pagination="false"
        :scroll="{ x: 1500, y: tableHeight - 10 }"
        :rowClassName="rowClassName"
    >
        <template #action>
            <a>action</a>
        </template>
    </a-table>
</template>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
    background-color: #fafafa;
}
</style>