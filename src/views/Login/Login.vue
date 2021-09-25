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
<script lang="ts">
import { useRouter, Router } from 'vue-router'
import LoginFormContainer from './components/LoginFormContainer/LoginFormContainer.vue'
import { checkAuthUser } from '@/services/auth'
import { LoginForm } from '@/views/Login/login'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        LoginFormContainer
    },
    setup() {
        // 路由实例
        const router: Router = useRouter()
        // 登录方法
        const loginAction: Function = async (form: LoginForm): Promise<any> => {
            const { code, data: { token } } = await checkAuthUser<LoginForm>(
                form
            )
            if (code === 200) {
                localStorage.setItem("system-token", token)
                console.log(token)
                await router.push('/dashboard/panel')
            }
        }
        return {
            loginAction,
        };
    },
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
