<template>
    <div class="login-container">
        <div class="element-container-left">
            <img src="@/assets/login/element1.png" />
        </div>
        <div class="element-container-right">
            <img src="@/assets/login/element2.png" />
        </div>
        <LoginFormContainer />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import LoginFormContainer from "./components/LoginFormContainer/LoginFormContainer.vue"

export default defineComponent({
    components: {
        LoginFormContainer,
    },
    setup() {},
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
