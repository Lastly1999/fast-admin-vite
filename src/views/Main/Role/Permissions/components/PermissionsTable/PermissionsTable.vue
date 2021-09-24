<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue"
const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    slots: { customRender: 'action' },
  },
];

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];

const tableHeight = ref(0)

onMounted(() => {
  nextTick(() => {
    tableHeight.value = document.getElementsByClassName('page-content')[0].clientHeight - document.getElementsByClassName('ant-table-thead')[0].clientHeight
  })
})

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}



</script>
<template>
  <a-table
    :pagination="false"
    :columns="columns"
    :data-source="data"
    :scroll="{ x: 1500, y: tableHeight }"
  >
    <template #action>
      <a>action</a>
    </template>
  </a-table>
</template>