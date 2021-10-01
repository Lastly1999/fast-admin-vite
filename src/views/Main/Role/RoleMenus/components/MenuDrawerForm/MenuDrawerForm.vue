<script lang="ts" setup>
import type { PropType } from "vue"

export type MenuormOptions = {
  icon: string;
  id: number;
  label: string;
  pId: number;
  pName?: string;
  path?: string;
  pPath?: string;
  pIcon?: string;
}

const props = defineProps({
  form: {
    type: Object as PropType<MenuormOptions> & never,
    defualt: (): MenuormOptions => {
      return {
        icon: '',
        id: 0,
        label: '',
        path: '',
        pName: '',
        pId: 0,
        pPath: '',
        pIcon: ""
      }
    }
  }
})

const options = [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const rules = {
  id: [{ required: true, message: '无根菜单id' }],
  label: [{ required: true, message: '请输入' }],
  icon: [{ required: true, message: '请选择' }],
  path: [{ required: true, message: '请输入' }],
  pName: [{ required: true, message: ' 请输入' }],
  pId: [{ required: true, message: '请输入' }],
  pPath: [{ required: true, message: '请输入' }],
  pIcon: [{ required: true, message: '清选择' }],
};

</script>

<template>
  <a-form :model="form" :rules="rules" layout="vertical">
    <div class="dialog-title">
      <h3>根菜单信息</h3>
    </div>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="根菜单序号" name="id">
          <a-input disabled v-model:value="form.id" placeholder="请输入" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="根菜单名称" name="label">
          <a-input :disabled="form.id" v-model:value="form.label" placeholder="请输入" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="根序号" name="pId">
          <a-input disabled v-model:value="form.pId" placeholder="请输入" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="根菜单名称" name="path">
          <a-input :disabled="form.id" v-model:value="form.path" placeholder="请输入" />
        </a-form-item>
      </a-col>
    </a-row>
    <div v-if="form.id">
      <div class="dialog-title">
        <h3>子菜单设置</h3>
      </div>
      <a-form-item label="子菜单名称" name="pName">
        <a-input v-model:value="form.pName" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="子菜单路由" name="pPath">
        <a-input v-model:value="form.pPath" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="子菜单图标" name="pIcon">
        <a-select v-model:value="form.pIcon" mode="tags" style="width: 100%" placeholder="Tags Mode" :options="options" @change="handleChange"></a-select>
      </a-form-item>
    </div>
  </a-form>
</template>

<style>
.dialog-title h3:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 2px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5),
    0 1px 1px rgba(255, 255, 255, 0.3);
}

.dialog-title h3:after {
  background: #3bf;
}

.dialog-title h3 {
  margin-bottom: 10px;
  padding: 0 0 0 20px;
  font-weight: normal;
  font-weight: 600;
  color: #000;
  font-family: "Hammersmith One", sans-serif;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  font-family: "Questrial", sans-serif;
}
</style>