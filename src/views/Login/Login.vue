<template>
    <div class="login-container">
        <div class="element-container-left">
            <img src="@/assets/login/element1.png"/>
        </div>
        <div class="element-container-right">
            <img src="@/assets/login/element2.png"/>
        </div>
        <LoginFormContainer @submit="loginAction"/>
    </div>
</template>
<script lang="ts">
import {defineComponent} from "vue"
import {useRouter} from "vue-router"
// components
import LoginFormContainer from "./components/LoginFormContainer/LoginFormContainer.vue"
// apis
import {checkAuthUser} from "@/services/auth"
// typings
import {HttpResponse} from "@/typings/response/response"
import {LoginForm} from "@/views/Login/login"

export default defineComponent({
    components: {
        LoginFormContainer,
    },
    setup() {
        const router = useRouter()
        const loginAction = async (form: LoginForm) => {
            const {code}: HttpResponse<T> = await checkAuthUser<LoginForm>(form)
            if (code === 200) {
                await router.push('/home')
            }
        }
        return {
            loginAction
        }
    },
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
