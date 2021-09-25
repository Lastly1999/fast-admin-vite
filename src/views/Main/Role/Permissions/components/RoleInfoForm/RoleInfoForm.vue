<script lang="ts" setup>
import { reactive } from "vue"

const form = reactive({
  roleName: '',
  describe: '',
  createDate: '',
  state: 0
});

const rules = {
  roleName: [
    {
      required: true,
      message: '请输入',
    },
  ],
  describe: [
    {
      required: true,
      message: '请输入',
    },
  ],
  createDate: [
    {
      required: true,
      message: '请输入',
    },
  ],
  state: [
    {
      required: true,
      message: '请输入',
    },
  ],
};
</script>

<template>
  <a-form :model="form" :rules="rules" layout="vertical">
    <a-form-item label="角色名称" name="roleName">
      <a-input v-model:value="form.roleName" placeholder="请输入" />
    </a-form-item>
    <a-form-item label="角色别名" name="describe">
      <a-input v-model:value="form.describe" placeholder="请输入" />
    </a-form-item>
    <a-form-item label="创建时间" name="createDate" placeholder="请选择">
      <a-date-picker :mode="form.createDate" show-time />
    </a-form-item>
    <a-form-item label="是否启用" name="state">
      <a-switch checked-children="启用" un-checked-children="禁用" v-model:checked="form.state" />
    </a-form-item>
  </a-form>
</template>