<script lang="ts" setup>
import { onMounted, ref } from "vue"

// typings
import type { RolePermissionParam } from "@/services/model/response/role"
import type { RoleForm } from "@/services/model/response/role"
import type { TreeChecked } from "@/components/RoleTree/RoleTree.vue"

// apis
import { appendRole, delRole, editRole, getRoles, editPermission } from "@/services/role"
import { getAllSysMenus, getUserMenuIds } from "@/services/auth"
import { toTree } from "@/utils/loadsh/data"

// components

import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons-vue'
import { alertMsg } from "@/utils/antd/antd"
import FTable from "@/components/FTable/FTable.vue"
import RoleInfoDrawerForm from "./components/RoleInfoDrawerForm/RoleInfoDrawerForm.vue"
import PermissionsFilter from "./components/PermissionsFilter/PermissionsFilter.vue"
import RoleTreeModal from "./components/RoleTreeModal/RoleTreeModal.vue"



onMounted(() => {
    getRoleTableList()
    getRoleTreeData()
})

// 角色列表
const roleData = ref<RoleForm[]>([]);

// 角色列表加载状态
const roleTableLoading = ref<boolean>(false);

// 获取角色列表
const getRoleTableList = async () => {
    roleTableLoading.value = true
    const { data } = await getRoles()
    roleData.value = data.list
    roleTableLoading.value = false
    visibleRoleInfoDrawer.value = false
};

// 表头数据源
const columns = [
    {
        title: "序号",
        align: "center",
        width: 100,
        customRender: (data: any) => {
            return data.index + 1;
        },
    },
    { title: "角色名称", dataIndex: "roleName", key: "0", width: 120 },
    { title: "角色别名", dataIndex: "describe", key: "1", width: 220 },
    { title: "创建时间", dataIndex: "createDate", key: "2", width: 280 },
    {
        title: "状态",
        key: "3",
        width: 110,
        slots: { customRender: "tags" },
    },
    {
        title: "操作",
        key: "4",
        fixed: "right",
        slots: { customRender: "action" },
    },
];

// 角色信息drawer显示状态
const visibleRoleInfoDrawer = ref<boolean>(false)

const roleFormBtnLoading = ref<boolean>(false)

// 角色表单信息
const roleInfoForm = ref<RoleForm>({
    roleId: 0,
    roleName: "",
    describe: "",
    createDate: "",
    state: 1,
});

// 修改角色信息
const editRoleDrawer = (data: any) => {
    roleInfoForm.value = JSON.parse(JSON.stringify(data));
    visibleRoleInfoDrawer.value = true;
};

// 修改角色信息
const onSubmit = async (form: RoleForm) => {
    roleFormBtnLoading.value = true
    if (form.roleId) {
        const body = await editRole(form);
        if (body.code === 200) {
            alertMsg("success", "修改成功");
            await getRoleTableList();
        }
    } else {
        const body = await appendRole(form);
        if (body.code === 200) {
            alertMsg("success", "修改成功");
            await getRoleTableList();
        }
    }
    roleFormBtnLoading.value = false
}

// 删除角色
const removeRoleRow = async (role: RoleForm) => {
    const body = await delRole(role.roleId)
    if (body.code === 200) {
        alertMsg("success", "删除成功")
        await getRoleTableList()
    }
}

// 当前选中人权限id
const roleId = ref<number | null>(null)
// 查看权限树
const previewRoleTree = (role: RoleForm) => {
    roleId.value = role.roleId
    getRoleIds(role.roleId)
    getRoleTreeData()
    visibleRoleTree.value = true
}

// 新增角色
const addRole = () => {
    roleInfoForm.value = {
        roleId: 0,
        roleName: "",
        describe: "",
        createDate: "",
        state: 1,
    }
    visibleRoleInfoDrawer.value = true;
}

// 权限树数据源
const roleTreeData = ref([])

// 权限树modal显示状态        
const visibleRoleTree = ref<boolean>(false)

// 请求权限菜单数据
const getRoleTreeData = async (): Promise<void> => {
    const body = await getAllSysMenus()
    if (body.code === 200) {
        roleTreeData.value = body.data ? toTree(body.data, "pId", "id") : []
    }
}

// 权限tree展开keys
const expandedKeys = ref([])
// 权限tree选中keys
const checkedKeys = ref<number[]>([])
// 权限tree半选keys
const parentKyes = ref<number[]>([])

// getAllSysMenus
const getRoleIds = async (id: number | string | undefined): Promise<void> => {
    const body = await getUserMenuIds(id)
    if (body.code === 200 && body.data.roleIds) {
        expandedKeys.value = body.data.roleIds
        checkedKeys.value = body.data.roleIds
        return
    }
    expandedKeys.value = []
    checkedKeys.value = []
}


// 权限树modal按钮加载状态
const confirmLoading = ref(false)

const roleCheck = (keys: TreeChecked) => {
    checkedKeys.value = keys.checked
}

const roleTreeSubmit = async () => {
    confirmLoading.value = true
    const param: RolePermissionParam = {
        roleId: roleId.value,
        permissionId: [...checkedKeys.value, ...parentKyes.value]
    }
    const body = await editPermission(param)
    if (body.code === 200) {
        confirmLoading.value = false
        visibleRoleTree.value = false
    }
    const check: boolean = body.code === 200
    alertMsg(check ? "success" : "error", check ? "修改角色权限菜单成功!" : "修改失败 o(╥﹏╥)o")
}


</script>

<template>
    <a-layout style="height: 100%; overflow: hidden">
        <!-- 角色列表筛选 -->
        <PermissionsFilter class="system-box-shadow" @add="addRole" />
        <a-layout-content class="page-content system-box-shadow">
            <!-- 角色列表 -->
            <FTable
                bordered
                size="middle"
                :loading="roleTableLoading"
                :columns="columns"
                :data-source="roleData"
            >
                <template #action="{ data }">
                    <a @click="editRoleDrawer(data)">修改</a>
                    <a-divider type="vertical" />
                    <a @click="previewRoleTree(data)">查看权限树</a>
                    <a-divider type="vertical" />
                    <a-popconfirm
                        title="你确定要删除该角色吗?"
                        ok-text="是的"
                        cancel-text="算了吧"
                        @confirm="removeRoleRow(data)"
                    >
                        <a>删除</a>
                    </a-popconfirm>
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
    <RoleInfoDrawerForm
        v-model:value="visibleRoleInfoDrawer"
        :form="roleInfoForm"
        @submit="onSubmit"
    />
    <RoleTreeModal
        v-model:value="visibleRoleTree"
        v-model:checkedKeys="checkedKeys"
        :data="roleTreeData"
        :confirmLoading="confirmLoading"
        @submit="roleTreeSubmit"
        @check="roleCheck"
    />
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
