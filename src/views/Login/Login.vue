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

export default defineComponent({
    components: {
        LoginFormContainer,
    },
    setup() {
        const loginAction = (form: any) => {
            console.log(form)
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
