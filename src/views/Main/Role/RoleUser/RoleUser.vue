<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue"
import { useStore } from "vuex"

// components
import QueryGroup from "@/components/QueryGroup/QueryGroup.vue"
import FContainer from "@/components/FContainer/FContainer.vue"
import FTable from "@/components/FTable/FTable.vue"
import RoleUserModalForm from "./components/RoleUserModalForm/RoleUserModalForm.vue"

import type { QueryJsonItem } from "@/components/QueryGroup/QueryGroup.vue"
import type { RegisterUserForm, UserSystem } from "@/services/model/response/user"
import type { listParams } from "@/services/model/response/public"
import type { UserForm } from "./components/RoleUserModalForm/RoleUserModalForm.vue"

// apis
import { getUsers, createSystemUser, deleteSystemUser } from "@/services/user/user"
import { alertMsg } from "@/utils/antd/antd"


onMounted(() => {
    getSystemUsers()
})

const store = useStore()

// 修改用户信息
const editUserRow = (data: UserForm): void => {
    userForm.value = {
        ...data
    }
    userModalVisible.value = true
}

// 新增用户信息
const append = () => {
    userForm.value = {
        id: null,
        userName: "",
        nikeName: "",
        userAvatar: "",
        CreatedAt: "",
        UpdatedAt: ""
    }
    userModalVisible.value = true
}

const search = () => {

}

const reset = () => {

}

// 查询组件渲染数据源
const queryJsonData = reactive<QueryJsonItem[]>([
    {
        type: "button",
        buttonType: "primary",
        text: "新增用户",
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

// 表格头数据
const columns = [
    {
        title: '用户序号',
        dataIndex: 'id',
        align: 'center',
        key: 'id',
        width: 80
    },
    {
        title: '账户名称',
        dataIndex: 'userName',
        key: 'userName',
        align: "center",
        width: 130
    },

    {
        title: '姓名',
        dataIndex: 'nikeName',
        key: 'nikeName',
        width: 130,
    },
    {
        title: "用户角色",
        width: 300,
        slots: { customRender: "tags" },
    },
    {
        title: '创建时间',
        dataIndex: 'CreatedAt',
        key: 'CreatedAt',
        width: 220,
    },
    {
        title: '最近更新',
        dataIndex: 'UpdatedAt',
        key: 'UpdatedAt',
        width: 220,
    },
    {
        title: "操作",
        fixed: "right",
        slots: { customRender: "action" },
    },
]
const userTableLoading = ref(false)

const userData = ref<UserSystem[]>()

const queryForm = ref<listParams>({
    keyWords: "",
    pageSize: 10,
    page: 1
})

const userModalTitle = ref<string>('新增用户')
const userModalVisible = ref<boolean>(false)

const userForm = ref<UserForm>({
    id: null,
    userName: "",
    nikeName: "",
    passWord: "",
    userAvatar: "",
    CreatedAt: "",
    UpdatedAt: ""
})


const addFormRequest = async () => {
    const param: RegisterUserForm = {
        userName: userForm.value.userName,
        passWord: userForm.value.passWord,
        nikeName: userForm.value.nikeName,
    }
    const { code } = await createSystemUser(param)
    if (code === 200) {
        alertMsg("success", "新增成功")
    }
    await getSystemUsers()
}

const submitForm = async (): Promise<void> => {
    console.log(userForm.value)
    if (userForm.value.id) {

    } else {
        addFormRequest()
    }
    userModalVisible.value = false
    await getSystemUsers()
}
// 请求系统用户列表
const getSystemUsers = async (): Promise<void> => {
    userTableLoading.value = true
    const { code, data } = await getUsers(queryForm.value)
    if (code === 200) {
        userData.value = data.users
        eachRoleIds()
    }
    userTableLoading.value = false
}

// 需要的角色id
const eachRoleIds = () => {
    userData.value!.map((item: UserSystem) => {
        item.roleIds = []
        item.role.map(roleItem => {
            item.roleIds.push(roleItem.roleId)
        })
    })
}

// 请求删除系统用户
const delSystemUser = async (id: number): Promise<void> => {
    const { code } = await deleteSystemUser(id)
    if (code === 200) {
        alertMsg("success", "删除成功")
    }
    await getSystemUsers()
}

const options = ref(store.getters["getSysMenus"])

</script>
<template>
    <FContainer>
        <template v-slot:header>
            <QueryGroup v-model:jsonData="queryJsonData" v-model:form="queryForm" />
        </template>
        <template v-slot:main>
            <FTable bordered size="middle" :loading="userTableLoading" :columns="columns" :data-source="userData" rowKey="id">
                <template #tags="{ data }">
                    <a-select mode="multiple" style="width: 100%" placeholder="请选择" option-label-prop="label" :options="options">
                        <template #option="{ value: val, label, icon }">
                            <span role="img" :aria-label="val">{{ icon }}</span>
                            &nbsp;&nbsp;{{ label }}
                        </template>
                    </a-select>
                </template>
                <template #action="{ data }">
                    <a @click="editUserRow(data)">修改</a>
                    <a-divider type="vertical" />
                    <a-popconfirm title="你确定要删除该菜单吗?删除后无法恢复!" ok-text="是的" cancel-text="算了吧" @confirm="delSystemUser(data.id)">
                        <a>删除</a>
                    </a-popconfirm>
                </template>
            </FTable>
            <RoleUserModalForm v-model:visible="userModalVisible" v-model:title="userModalTitle" :form="userForm" @submit="submitForm" />
        </template>
    </FContainer>
</template>