<template>
    <div class="login-form-container">
        <h2 class="form-title">您好！欢迎登录</h2>
        <el-form :model="loginForm" status-icon ref="ruleForm" label-position="top">
            <el-form-item prop="userName" label="用户名">
                <el-input placeholder="用户名" v-model="loginForm.userName" autocomplete="off">
                    <template #prefix>
                        <i class="el-icon-user" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="passWord" label="密码">
                <el-input placeholder="密码" type="passWord" v-model="loginForm.passWord" autocomplete="off">
                    <template #prefix>
                        <div>
                            <i class="el-icon-view" />
                        </div>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
        <div class="form-btn-login">
            <el-button style="width: 100%" type="primary" round>LOG IN</el-button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
    setup() {
        const loginForm = reactive({
            userName: "",
            passWord: "",
        })
        return {
            loginForm,
        }
    },
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
