<script lang="ts" setup>
import { reactive, ref } from "vue";
// types
import type { QueryJsonItem } from "@/components/QueryGroup/QueryGroup.vue";
// components
import QueryGroup from "@/components/QueryGroup/QueryGroup.vue";

// query 搜索方法
const search = () => {
  console.log(queryForm.value)
  console.log('search')
}

// query 重置方法
const reset = () => {
  queryForm.value = { name: '' }
}

// 查询组件渲染数据源
const queryJsonData = reactive<QueryJsonItem[]>([
  {
    type: "input",
    label: "菜单名称：",
    placeholder: "请输入要搜索的名称",
    prop: "name",
  },
  {
    type: "button",
    buttonType: "primary",
    text: "查询",
    fun: search
  },
  {
    type: "button",
    buttonType: "default",
    text: "重置",
    fun: reset
  },
])

// 查询的表单
const queryForm = ref({
  name: ""
})


</script>
<template>
  <div>
    <QueryGroup v-model:jsonData="queryJsonData" v-model:form="queryForm" />
  </div>
</template>
