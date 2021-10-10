<script lang="ts" setup>
import { computed, ref, watch } from "vue"
import { useStore } from "vuex"
import FModal from "@/components/FModal/FModal.vue"
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface"

// apis
import { getSystemUserRoles } from "@/services/user/user"

import type { PropType } from 'vue'
import type { RoleItem } from "@/store/modules/system"


export type UserForm = {
  id: number | null;
  userName: string;
  userAvatar: string;
  passWord?: string;
  nikeName: string;
  roleId: string | null;
  CreatedAt: string;
  UpdatedAt: string;
}

const store = useStore()

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

watch(() => props.form.id, () => {
  if (props.form.id) {
    getRoles(props.form.id)
  } else {
    roles.value = storeRoles.value
  }
}, { deep: true })

const getRoles = async (id: number) => {
  const { code, data } = await getSystemUserRoles(id)
  if (code === 200) {
    roles.value = data.roles
  }
}
const roles = ref<RoleItem[]>([])

const storeRoles = computed<RoleItem[]>(() => store.getters["systemModule/getSysRoles"])

const userFormRef = ref()

const onSubmit = (): void => {
  userFormRef.value
    .validate()
    .then(() => {
      emit('submit', props.form)
    })
    .catch((error: ValidateErrorEntity<UserForm>) => {
      console.log('error', error);
    });
}

const rules = {
  userName: [{ required: true, message: '请输入' }],
  userAvatar: [{ required: true, message: '请输入' }],
  passWord: [{ required: true, message: '请输入' }],
  nikeName: [{ required: true, message: '请输入' }],
  roleId: [{ required: true, message: '请选择' }],
  CreatedAt: [{ required: true, message: '请选择' }],
  UpdatedAt: [{ required: true, message: '请选择' }]
}
</script>

<template>
  <FModal v-model:value="visible" v-model:title="title" :confirm-loading="loading" @ok="onSubmit" @close="emit('update:visible', false)">
    <a-form ref="userFormRef" :model="form" :rules="rules" layout="vertical">
      <a-form-item v-if="form.id" label="用户序号" name="pId">
        <a-input disabled v-model:value="form.id" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="账户名称" name="userName">
        <a-input v-model:value="form.userName" placeholder="请输入" />
      </a-form-item>
      <!-- <a-form-item label="用户头像" name="userAvatar">
        <a-input v-model:value="form.userAvatar" placeholder="请输入" />
      </a-form-item>-->
      <a-form-item label="姓名" name="nikeName">
        <a-input v-model:value="form.nikeName" placeholder="请输入" />
      </a-form-item>
      <a-form-item v-if="!form.id" label="账户密码" name="passWord">
        <a-input v-model:value="form.passWord" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="角色" name="roleId">
        <a-select v-model:value="form.roleId" style="width: 100%" placeholder="暂无配置角色" option-label-prop="label">
          <a-select-option v-for="item in roles" :value="item.roleId" :label="item.roleName">&nbsp;&nbsp;{{ item.roleName }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item v-if="form.id" label="创建时间" name="CreatedAt">
        <a-input disabled v-model:value="form.CreatedAt" placeholder="请输入" />
      </a-form-item>
      <a-form-item v-if="form.id" label="更新时间" name="UpdatedAt">
        <a-input disabled v-model:value="form.UpdatedAt" placeholder="请输入" />
      </a-form-item>
    </a-form>
  </FModal>
</template>