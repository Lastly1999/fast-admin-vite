<template>
  <div class="login-form-container">
    <h2 class="form-title">您好！欢迎登录</h2>
    <a-form :model="loginForm" @finish="onSubmit" @finishFailed="handleFinishFailed">
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
        <a-button type="primary" html-type="submit" :disabled="loginForm.userName === '' || loginForm.passWord === ''">Log in</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" >
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  emits: {
    submit: val => {
      return val;
    }
  },
  setup(props, { emit }) {
    // 登录 reactive
    const login = reactive({
      loginForm: {
        userName: "",
        passWord: ""
      },
      onSubmit: () => {
        emit("submit", login.loginForm);
      }
    });
    return {
      ...toRefs(login)
    };
  }
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
