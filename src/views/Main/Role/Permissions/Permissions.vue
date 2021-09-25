<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue"
import PermissionsFilter from "./components/PermissionsFilter/PermissionsFilter.vue"
import FTable from "@/components/FTable/FTable.vue"
import { getRoles } from "services/role"

onMounted(() => {
  getRoleTableList()
})


interface RoleDataItem {
  describe: string;
  roleId: number;
  roleName: string;
  state: number;
  createDate: string;
}

const pageSizeOptions = ref<string[]>(['10', '20', '30', '40', '50']);
const current = ref(1);
const pageSizeRef = ref(10);
const total = ref(50);
const onShowSizeChange = (current: number, pageSize: number) => {
  pageSizeRef.value = pageSize;
};



// 角色列表
let roleData = ref<RoleDataItem[]>([]);

// 获取角色列表
const getRoleTableList = async () => {
  const { data } = await getRoles()
  roleData.value = data.list
}

const columns = [
  {
    title: '序号',
    width: 10,
    customRender: (data: any) => {
      return data.index + 1
    }
  },
  { title: '角色名称', dataIndex: 'roleName', key: '0', width: 30 },
  { title: '角色别名', dataIndex: 'describe', key: '1', width: 30 },
]

</script>

<template>
  <a-layout style="height: 100%;overflow: hidden;">
    <PermissionsFilter class="system-box-shadow" />
    <a-layout-content class="page-content system-box-shadow">
      <FTable size="middle" :columns="columns" :data-source="roleData" />
    </a-layout-content>
    <a-layout-footer style="height: auto!important;padding: 10px!important;">
      <a-pagination
        v-model:current="current"
        :page-size-options="pageSizeOptions"
        :total="total"
        show-size-changer
        :page-size="pageSizeRef"
        @showSizeChange="onShowSizeChange"
      >
        <template #buildOptionText="props">
          <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
          <span v-else>全部</span>
        </template>
      </a-pagination>
    </a-layout-footer>
  </a-layout>
</template>