<script lang="ts" setup>
import { SettingOutlined, ExpandOutlined, SearchOutlined, PoweroffOutlined } from '@ant-design/icons-vue';
import "./index.scss"

</script>
<template>
  <div class="system-setup">
    <div class="setup-item">
      <ExpandOutlined />
    </div>
    <div class="setup-item">
      <SearchOutlined />
    </div>
    <a-popover placement="bottom">
      <template #content>
        <div class="setup-select-item">
          <PoweroffOutlined />
          <span class="setup-select-item-title">注销系统</span>
        </div>
      </template>
      <template #title>
        <div>
          <SettingOutlined />
          <span class="setup-select-title">系统设置</span>
        </div>
      </template>
      <div class="setup-item">
        <SettingOutlined />
      </div>
    </a-popover>
  </div>
</template>
<style lang="scss">
.setup-select-title {
  margin-left: 5px;
}
.ant-popover-inner-content {
  padding: 0;
  .setup-select-item {
    padding: 6px 0 6px 16px;
    transition: 0.2s linear;
    .setup-select-item-title {
      margin-left: 4px;
    }
    &:hover {
      cursor: pointer;
      background-color: #f0f2f5;
    }
  }
}
</style>