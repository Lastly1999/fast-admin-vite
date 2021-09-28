
<script lang="ts" setup>
import { useStore, Store } from "vuex"
import LoginFormContainer from './components/LoginFormContainer/LoginFormContainer.vue'
import type { LoginForm } from '@/services/model/response/role'

const store: Store<any> = useStore()

// 登录方法
const loginAction = async (form: LoginForm): Promise<any> => {
    await store.dispatch("sysModule/API_POST_SYS_AUTH", form)
}
</script>

<template>
    <div class="login-container">
        <div class="element-container-left">
            <img src="@/assets/login/element1.png" />
        </div>
        <div class="element-container-right">
            <img src="@/assets/login/element2.png" />
        </div>
        <LoginFormContainer @change="loginAction" />
    </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
