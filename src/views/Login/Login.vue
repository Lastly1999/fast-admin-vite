<script lang="ts" setup>
import {ref, onMounted} from "vue"
import {useStore, Store} from "vuex"
import LoginFormContainer from './components/LoginFormContainer/LoginFormContainer.vue'
import type {AutCodeOptions} from './components/LoginFormContainer/LoginFormContainer.vue'
import type {LoginForm} from '@/services/model/response/role'

// apis
import {getImgsAuthCode} from "@/services/auth"


onMounted(() => {
    getAuthImg()
})

const store: Store<any> = useStore()

// 登录button loading
const formLoading = ref(false)

// 登录方法
const loginAction = async (form: LoginForm): Promise<any> => {
    formLoading.value = true
    try {
        await store.dispatch("authModule/API_POST_SYS_AUTH", {...form, codeAuth: authCodeParams.value.code})
    } catch {
        await getAuthImg()
    } finally {
        formLoading.value = false
    }
}

// 图形验证码参数
const authCodeParams = ref<AutCodeOptions>({
    code: "",
    codeBase: ""
})

// 获取图形验证码
const getAuthImg = async () => {
    const {code, data} = await getImgsAuthCode()
    if (code === 200) {
        authCodeParams.value = {
            ...data
        }
    }
}

</script>

<template>
    <div class="login-container">
        <div class="element-container-left">
            <img src="@/assets/login/element1.png"/>
        </div>
        <div class="element-container-right">
            <img src="@/assets/login/element2.png"/>
        </div>
        <LoginFormContainer @change="loginAction" :formLoading="formLoading" :authCode="authCodeParams"/>
    </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
