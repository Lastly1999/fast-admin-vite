<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue"
// types
import type { QueryJsonItem } from "@/components/QueryGroup/QueryGroup.vue"
// apis
import { getAllSysMenus } from "@/services/auth"
import { listToTree } from "utils/loadsh/data"
// components
import { PlusOutlined } from '@ant-design/icons-vue'
import QueryGroup from "@/components/QueryGroup/QueryGroup.vue"
import FContainer from "@/components/FContainer/FContainer.vue"
import FTable from "@/components/FTable/FTable.vue"
import FModal from "@/components/FModal/FModal.vue"
import MenuDrawerForm from "./components/MenuDrawerForm/MenuDrawerForm.vue"
import type { MenuormOptions } from "./components/MenuDrawerForm/MenuDrawerForm.vue"

export type MenuListItem = {
    icon: string;
    id: number;
    label: string;
    pId: number;
    pName: string;
    path: string;
    children?: MenuListItem[]
}


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
    menuModalForm.value = {
        id: 0,
        icon: '',
        label: '',
        path: '',
        pId: 0,
        pName: '',
        pPath: '',
        pIcon: ''
    }
    showMenuTitle.value = "新增根菜单"
    showMenuDrawer.value = true
}

// 查询组件渲染数据源
const queryJsonData = reactive<QueryJsonItem[]>([
    {
        type: "button",
        buttonType: "primary",
        text: "新增根菜单",
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
    {
        title: "操作",
        fixed: "right",
        slots: { customRender: "action" },
    },
]

// 系统菜单编辑/新增状态
const showMenuDrawer = ref(false)
// 系统菜单抽屉名称
const showMenuTitle = ref("")

// 系统系统编辑/新增表单
const menuModalForm = ref<MenuormOptions>({
    id: 0,
    icon: '',
    label: '',
    path: '',
    pId: 0,
    pName: '',
    pPath: '',
    pIcon: ''
})

// 请求权限菜单数据源
const getRoleMenus = async () => {
    const { code, data } = await getAllSysMenus()
    if (code === 200) {
        menuData.value = listToTree(data)
    }
}

// 列表添加子菜单按钮方法
const appendChildren = (data: MenuListItem) => {
    menuModalForm.value = {
        id: data.id,
        icon: data.icon,
        label: data.label,
        path: data.path,
        pId: data.pId
    }
    showMenuTitle.value = "添加子菜单"
    showMenuDrawer.value = true
}

</script>
<template>
    <FContainer>
        <template v-slot:header>
            <QueryGroup v-model:jsonData="queryJsonData" v-model:form="queryForm" />
        </template>
        <template v-slot:main>
            <FTable bordered size="middle" :loading="menuTableLoading" :columns="columns" :data-source="menuData">
                <template #action="{ data }">
                    <a @click="appendChildren(data)">
                        <PlusOutlined />添加子菜单
                    </a>
                </template>
            </FTable>
        </template>
    </FContainer>
    <FModal :title="showMenuTitle" v-model:value="showMenuDrawer">
        <MenuDrawerForm :form="menuModalForm" />
    </FModal>
</template>
