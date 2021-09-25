<script lang="ts" setup>
import { ref, onMounted } from "vue"
// apis
import { getRoles } from "services/role"
// components
import PermissionsFilter from "./components/PermissionsFilter/PermissionsFilter.vue"
import FTable from "@/components/FTable/FTable.vue"
import FDrawer from "@/components/FDrawer/FDrawer.vue"
import RoleForm from "./components/RoleInfoForm/RoleInfoForm.vue"

onMounted(() => {
    getRoleTableList()
    console.log(roleFormRef)
})

const roleFormRef = ref(null)

interface RoleDataItem {
    describe: string;
    roleId: number;
    roleName: string;
    state: number;
    createDate: string;
}

// 角色列表
let roleData = ref<RoleDataItem[]>([]);

// 角色列表加载状态
const roleTableLoading = ref<boolean>(false)

// 获取角色列表
const getRoleTableList = async () => {
    roleTableLoading.value = true
    const { data } = await getRoles()
    roleData.value = data.list
    roleTableLoading.value = false
}

const columns = [
    {
        title: '序号',
        align: 'center',
        width: 100,
        customRender: (data: any) => {
            return data.index + 1
        }
    },
    { title: '角色名称', dataIndex: 'roleName', key: '0', width: 120 },
    { title: '角色别名', dataIndex: 'describe', key: '1', width: 130 },
    { title: '创建时间', dataIndex: 'createDate', key: '2', width: 280 },
    {
        title: '状态',
        key: '3',
        width: 110,
        slots: { customRender: 'tags' },
    },
    {
        title: '操作',
        key: '4',
        fixed: 'right',
        slots: { customRender: 'action' },
    },
]

const roleInfoVisible = ref(false)

const editRoleDrawer = () => {
    roleInfoVisible.value = true
}


const onSubmit = () => {
    console.log('test')
}


</script>

<template>
    <a-layout style="height: 100%;overflow: hidden;">
        <!-- 角色列表筛选 -->
        <PermissionsFilter class="system-box-shadow" />
        <a-layout-content class="page-content system-box-shadow">
            <!-- 角色列表 -->
            <FTable bordered size="middle" :columns="columns" :data-source="roleData">
                <template #action>
                    <a @click="editRoleDrawer">修改</a>
                    <a-divider type="vertical" />
                    <a>删除</a>
                </template>
                <template #tags="{ data }">
                    <a-tag v-if="data.state === 1" color="success">
                        <template #icon>
                            <check-circle-outlined />
                        </template>
                        启用
                    </a-tag>
                    <a-tag v-else color="error">
                        <template #icon>
                            <close-circle-outlined />
                        </template>
                        禁用
                    </a-tag>
                </template>
            </FTable>
        </a-layout-content>
    </a-layout>
    <!-- 角色信息修改drawer -->
    <FDrawer v-model:value="roleInfoVisible" title="角色信息" :width="500" @submit="onSubmit">
        <!-- 表单信息 -->
        <RoleForm ref="roleFormRef" />
    </FDrawer>
</template>

<style scoped>
:deep().ant-table-tbody > tr > td {
    white-space: break-spaces;
}
.page-content {
    background-color: #fff;
    position: relative;
}

.page-pagination {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;
}
</style>