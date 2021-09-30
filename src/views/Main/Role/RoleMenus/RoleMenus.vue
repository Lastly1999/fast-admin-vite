<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue"
// types
import type { QueryJsonItem } from "@/components/QueryGroup/QueryGroup.vue"
// apis
import { getAllSysMenus } from "@/services/auth"
import { listToTree } from "utils/loadsh/data"
// components
import QueryGroup from "@/components/QueryGroup/QueryGroup.vue"
import FContainer from "@/components/FContainer/FContainer.vue"
import FTable from "@/components/FTable/FTable.vue"
import FDrawer from "@/components/FDrawer/FDrawer.vue"

onMounted(() => {
  getRoleMenus()
})

// query 搜索方法
const search = () => {
  console.log(queryForm.value)
  console.log('search')
}

// query 重置方法
const reset = () => {
  queryForm.value = { name: '' }
}

// query 新增方法
const append = () => {
  showMenuDrawer.value = true
  console.log('append')
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
    text: "新增菜单",
    fun: append
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
  }
])

// 查询的表单
const queryForm = ref({
  name: ""
})
// table loading状态
const menuTableLoading = ref(false)
// 表格菜单数据源
const menuData = ref([])

const columns = [
  {
    title: '菜单序号',
    dataIndex: 'id',
    key: 'id',
    width: "10%"
  },
  {
    title: '菜单名称',
    dataIndex: 'label',
    key: 'label',
    width: "13%"
  },
  {
    title: '父级菜单序号',
    dataIndex: 'pId',
    key: 'pId',
    width: "5%"
  },
  {
    title: '父级菜单名称',
    dataIndex: 'pName',
    key: 'pName',
    width: "13%"
  },
  {
    title: '路由路径',
    dataIndex: 'path',
    key: 'path',
    width: "13%"
  },
]

// 系统菜单编辑/新增状态
const showMenuDrawer = ref(false)

// 请求权限菜单数据源
const getRoleMenus = async () => {
  const { code, data } = await getAllSysMenus()
  if (code === 200) {
    menuData.value = listToTree(data)
    console.log(menuData.value)
  }
}

</script>
<template>
  <FContainer>
    <template v-slot:header>
      <QueryGroup v-model:jsonData="queryJsonData" v-model:form="queryForm" />
    </template>
    <template v-slot:main>
      <FTable bordered size="middle" :loading="menuTableLoading" :columns="columns" :data-source="menuData"></FTable>
    </template>
  </FContainer>
  <FDrawer title="新增系统菜单" v-model:value="showMenuDrawer">
    <div>dsasssssssssssssssssssssss</div>
  </FDrawer>
</template>
