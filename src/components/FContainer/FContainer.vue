<script lang="ts" setup></script>
<template>
  <a-layout style="height: 100%; overflow: hidden">
    <!-- headers -->
    <slot name="header"></slot>
    <a-layout-content class="page-content system-box-shadow">
      <!-- main -->
      <slot name="main"></slot>
    </a-layout-content>
  </a-layout>
</template>
<style>
:deep().ant-table-tbody > tr > td {
  white-space: break-spaces;
}

.page-content {
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
}

.page-pagination {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
}
</style>