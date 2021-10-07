<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue"

// components
import QueryGroup from "@/components/QueryGroup/QueryGroup.vue"
import FContainer from "@/components/FContainer/FContainer.vue"
import FTable from "@/components/FTable/FTable.vue"

import type { QueryJsonItem } from "@/components/QueryGroup/QueryGroup.vue"
import type { UserSystem } from "@/services/model/response/user"
import type { listParams } from "@/services/model/response/public"


// apis
import { getUsers } from "@/services/user/user"


onMounted(() => {
    getSystemUsers()
})


const append = () => {

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
        key: 'id',
        width: "4%"
    },
    {
        title: '账户名称',
        dataIndex: 'userName',
        key: 'userName',
        width: "5%"
    },
    {
        title: "用户头像",
        width: "7%",
        slots: { customRender: "icon" },
    },
    {
        title: '姓名',
        dataIndex: 'nikeName',
        key: 'nikeName',
        width: "5%"
    },
    {
        title: '创建时间',
        dataIndex: 'CreatedAt',
        key: 'CreatedAt',
        width: "7%"
    },
    {
        title: '最近更新',
        dataIndex: 'UpdatedAt',
        key: 'UpdatedAt',
        width: "7%"
    },
    {
        title: "操作",
        width: "7%",
        slots: { customRender: "action" },
    },
]
const userTableLoading = ref(false)

const userData = ref<UserSystem>()

const queryForm = ref<listParams>({
    keyWords: "",
    pageSize: 10,
    page: 1
})


// 请求系统用户列表
const getSystemUsers = async () => {
    const { code, data } = await getUsers(queryForm.value)
    if (code === 200) {
        userData.value = data.users
    }
}

</script>
<template>
    <FContainer>
        <template v-slot:header>
            <QueryGroup v-model:jsonData="queryJsonData" v-model:form="queryForm" />
        </template>
        <template v-slot:main>
            <FTable bordered size="middle" :loading="userTableLoading" :columns="columns" :data-source="userData" rowKey="id">
                <template #icon="{ data }">
                    <Icon :icon="data.icon" />
                    {{ data.icon }}
                </template>
                <template #action="{ data }">
                    <a>
                        <PlusOutlined />修改
                    </a>
                    <a-divider type="vertical" />
                    <a-popconfirm title="你确定要删除该菜单吗?删除后无法恢复!" ok-text="是的" cancel-text="算了吧">
                        <a>删除</a>
                    </a-popconfirm>
                </template>
            </FTable>
        </template>
    </FContainer>
</template>