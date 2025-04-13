<template>
    <main class="login-container">
        <div class="logo-c">
            <div>
                <h2>Hi! 您好</h2>
                <h2>欢迎进入数据管理平台</h2>
            </div>
            <img :src="loginLeft" alt="">
        </div>
        <div class="form-c">
            <h1>欢迎回来</h1>
            <div class="form">
                <el-form label-position="top" :model="form" size="large" @keyup.enter.native="submit" ref="formRef"
                    hide-required-asterisk>
                    <el-form-item label="用户名" prop="userName" :rules="[
                        { required: true, message: '用户名为空' },
                    ]">
                        <el-input v-model="form.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" :rules="[
                        { required: true, message: '密码为空' },
                    ]">
                        <el-input show-password v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <div style="display: flex; align-items: center;justify-content: space-between;width: 100%;">
                            <el-checkbox label="记住密码" v-model="form.remeber" />
                            <a href="" class="">忘记密码</a>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width: 100%;" @click="submit">立即登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </main>
</template>

<script setup name="login">
/**
* @author 张云进
* @description 登录页
*/
import loginLeft from "@/assets/images/login-left.png"
import { reactive, ref } from "vue";
import useStore from "@/pinia"
import Cookies from "js-cookie";
const route = useRoute();
console.log(route, "route");

const store = useStore();
const form = reactive({
    userName: '',
    password: '',
    remeber: false
})
// ref
const formRef = ref(null)
// 提交表单
const submit = () => {
    console.log(store.user.token, "store");

    formRef.value.validate((valid) => {
        if (valid) {
            // 加密password

            // login api
            store.user.login(form).then(res => {
                if (form.remeber) {
                    Cookies.set("username", loginForm.value.username, { expires: 30 });
                    Cookies.set("password", encrypt(loginForm.value.password), { expires: 30 });
                    Cookies.set("rememberMe", loginForm.value.rememberMe, { expires: 30 });
                } else {
                    // 否则移除
                    Cookies.remove("username");
                    Cookies.remove("password");
                    Cookies.remove("rememberMe");
                }
            }).catch(err => {

            })
        }
    })
}

</script>

<style lang='scss' scoped>
@use '@/assets/styles/global.scss' as global;
$gbc: rgba(242, 248, 252, 1);
$lbc: rgba(63, 140, 255, 1);
$fbc: rgba(255, 255, 255, 1);

.login-container {
    height: 100%;
    background-color: $gbc;
    min-width: 900px;
    @include global.flex-layout($justify: center, $align: center);

    .logo-c {
        height: 72%;
        width: 30%;
        background-color: $lbc;
        border-radius: 10px 0 0 10px;
        font-size: 2rem;
        color: #f5f5f5;
        font-weight: 700;
        line-height: 3rem;
        @include global.flex-layout($direction: column, $justify: center, $align: center);
        transition: height 2s ease-in-out;
        overflow: hidden;

        /* 防止内容溢出 */
        img {
            max-width: 92%;
        }
    }

    .form-c {
        height: 72%;
        width: 30%;
        background-color: $fbc;
        border-radius: 0 10px 10px 0;
        @include global.flex-layout($direction: column, $justify: center, $align: center);

        h1 {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 0px;
            color: rgba(10, 22, 41, 1);
            vertical-align: top;
        }

        .form {
            width: 57%;
            padding-top: 15%;

            :deep(.el-form-item__label) {
                color: rgba(125, 133, 146, 1);
                font-weight: normal;
                font-size: 0.9rem;
            }

            :deep(.el-input__wrapper) {
                border-radius: 10px;
            }

            :deep(.el-button) {
                border-radius: 10px;
                font-size: 0.8rem;
                font-weight: 400;
                letter-spacing: 1px;
            }
        }
    }
}
</style>
