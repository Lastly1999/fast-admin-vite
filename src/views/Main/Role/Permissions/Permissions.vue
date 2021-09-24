<script lang="ts" setup>
import { ref } from "vue"
import PermissionsFilter from "./components/PermissionsFilter/PermissionsFilter.vue"
import PermissionsTable from "./components/PermissionsTable/PermissionsTable.vue"
import FContainer from "@/components/FContainer/FContainer.vue"

const pageSizeOptions = ref<string[]>(['10', '20', '30', '40', '50']);
const current = ref(1);
const pageSizeRef = ref(10);
const total = ref(50);
const onShowSizeChange = (current: number, pageSize: number) => {
  console.log(pageSize);
  pageSizeRef.value = pageSize;
};
</script>

<template>
  <a-layout style="height: 100%;overflow: hidden;">
    <PermissionsFilter />
    <a-layout-content class="page-content">
      <PermissionsTable />
    </a-layout-content>
    <a-layout-footer style="height: auto!important;padding: 0!important;background-color: #fff;">
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