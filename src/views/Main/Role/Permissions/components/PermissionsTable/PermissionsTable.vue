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



</script>
<template>
  <a-table
    {...$props}
    :pagination="false"
    :scroll="{ x: 1500, y: tableHeight - 10 }"
  >
    <template #action>
      <a>action</a>
    </template>
  </a-table>
</template>