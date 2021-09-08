<template>
  <div class="login-form-container">
    <h2 class="form-title">您好！欢迎登录</h2>
    <a-form :model="loginForm" @finish="onSubmit">
      <a-form-item>
        <a-input v-model:value="loginForm.userName" placeholder="userName">
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="loginForm.passWord" type="password" placeholder="Password">
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="loginForm.userName === '' || loginForm.passWord === ''"
        >Log in</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  emits: ['change', 'update'],
  setup(_props, { emit }) {

    const loginForm = ref({
      userName: "",
      passWord: ""
    })

    const onSubmit = () => {
      emit("change", loginForm.value);
    }

    return {
      LockOutlined,
      UserOutlined,
      loginForm,
      onSubmit,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
