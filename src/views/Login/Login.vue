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
import LoginFormContainer from "./components/LoginFormContainer/LoginFormContainer.vue"
import {checkAuthUser} from "@/services/auth"

export default defineComponent({
    components: {
        LoginFormContainer,
    },
    setup() {
        const loginAction = async (form: any) => {
            const res = await checkAuthUser(form)
            console.log(res)
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
