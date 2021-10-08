<script lang="ts" setup>
import { watch } from "vue"
import type { PropType } from 'vue'

import FModal from "@/components/FModal/FModal.vue"


export type UserForm = {
  id: number | null;
  userName: string;
  userAvatar: string;
  nikeName: string;
  CreatedAt: string;
  UpdatedAt: string;
}

const props = defineProps({
  loading: {
    type: Boolean,
    default: () => false
  },
  title: {
    type: String,
    default: () => ''
  },
  visible: {
    type: Boolean,
    default: () => false
  },
  form: {
    type: Object as PropType<UserForm>,
    default: () => {
      return {
        id: null
      }
    }
  }
})

const emit = defineEmits<{
  (event: 'submit', form: UserForm): void,
  (event: 'update:visible', show: boolean): void
}>()

const onSubmit = (): void => {
  emit('submit', props.form)
}

const rules = {
  userName: [{ required: true, message: '请输入' }],
  userAvatar: [{ required: true, message: '请输入' }],
  nikeName: [{ required: true, message: '请输入' }],
  CreatedAt: [{ required: true, message: '请选择' }],
  UpdatedAt: [{ required: true, message: '请输入' }]
}
</script>

<template>
  <FModal v-model:value="visible" v-model:title="title" :confirm-loading="loading" @ok="onSubmit" @close="emit('update:visible', false)">
    <a-form ref="menuForm" :model="form" :rules="rules" layout="vertical">
      <a-form-item v-if="form.id" label="用户序号" name="pId">
        <a-input disabled v-model:value="form.id" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="账户名称" name="userName">
        <a-input v-model:value="form.userName" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="用户头像" name="userAvatar">
        <a-input v-model:value="form.userAvatar" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="姓名" name="nikeName">
        <a-input v-model:value="form.nikeName" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="创建时间" name="CreatedAt">
        <a-input v-model:value="form.CreatedAt" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="更新时间" name="UpdatedAt">
        <a-input v-model:value="form.UpdatedAt" placeholder="请输入" />
      </a-form-item>
    </a-form>
  </FModal>
</template>