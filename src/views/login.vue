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
                    <el-form-item prop="username" :rules="[
                        { required: true, message: '用户名为空' },
                    ]">
                        <el-input v-model="form.username" placeholder="用户名">
                            <template #prefix>
                                <Cssicon name="mdi:user-outline" />
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password" :rules="[
                        { required: true, message: '密码为空' },
                    ]">
                        <el-input show-password v-model="form.password" placeholder="密码">
                            <template #prefix>
                                <Cssicon name="mdi:password" />
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <div class="code-v">
                            <el-input v-model="form.code" placeholder="验证码"></el-input>
                            <img :src="codeUrl" @click="getImage" />
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <div class="code-v">
                            <el-checkbox label="记住密码" v-model="form.rememberMe" />
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
import { onMounted, reactive, ref } from "vue";
import useStore from "@/pinia"
import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/utils/jsencrypt"
import { getCaptchaImage } from "@/api/user"
onMounted(() => {
    getImage()
})
const codeUrl = ref('')
// 获取验证码
const getImage = () => {
    getCaptchaImage().then(res => {
        console.log(res);
        codeUrl.value = "data:image/gif;base64," + res.img
        form.uuid = res.uuid
    })
}

const store = useStore();
const form = reactive({
    username: '',
    password: '',
    rememberMe: false,
    uuid: '',
    code: ''
})
const redirect = ref(undefined);
const route = useRoute();
const router = useRouter();
watch(route, (newRoute) => {
    redirect.value = newRoute.query && newRoute.query.redirect;
}, { immediate: true });
// ref
const formRef = ref(null)
// 提交表单
const submit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            store.user.login(form).then(res => {
                if (form.rememberMe) {
                    Cookies.set("username", form.username, { expires: 30 });
                    Cookies.set("password", encrypt(form.password), { expires: 30 });
                    Cookies.set("rememberMe", form.rememberMe, { expires: 30 });
                } else {
                    // 否则移除
                    Cookies.remove("username");
                    Cookies.remove("password");
                    Cookies.remove("rememberMe");
                }
                const query = route.query;
                const otherQueryParams = Object.keys(query).reduce((acc, cur) => {
                    if (cur !== "redirect") {
                        acc[cur] = query[cur];
                    }
                    return acc;
                }, {});
                router.push({ path: redirect.value || "/nav/board", query: otherQueryParams });
            }).catch(err => {
                getImage()
            })
        }
    })
}
function getCookie() {
    const username = Cookies.get("username");
    const password = Cookies.get("password");
    const rememberMe = Cookies.get("rememberMe");
    form.username = username === undefined ? form.username : username;
    form.password = password === undefined ? form.password : decrypt(password);
    form.rememberMe = rememberMe === undefined ? false : Boolean(rememberMe);
}

getCookie();
</script>

<style lang='scss' scoped>
@use '@/styles/global.scss' as global;
@use "@/styles/theme.scss" as *;
$gbc: rgba(242, 248, 252, 1);
$lbc: rgba(63, 140, 255, 1);
$fbc: rgba(255, 255, 255, 1);

.login-container {
    height: 100%;
    // background-color: rgba(27, 27, 31, 1);

    @include useTheme {
        background-color: getVar('bac-m');
    }

    @include global.flex-layout($justify: center, $align: center);

    .logo-c {
        height: 72%;
        width: 30%;
        background-color: $lbc;
        border-radius: 1rem 0 0 1rem;
        font-size: 2rem;

        @include useTheme {
            color: getVar('fc');
        }

        // color: #f5f5f5;
        font-weight: 700;
        line-height: 3rem;
        @include global.flex-layout($direction: column, $justify: center, $align: center);

        /* 防止内容溢出 */
        img {
            // max-width: 92%;
            width: 40rem;
        }
    }

    .form-c {
        height: 72%;
        width: 30%;
        // background-color: $fbc;

        @include useTheme {
            background-color: getVar('bac-l');
        }

        border-radius: 0 1rem 1rem 0;
        @include global.flex-layout($direction: column, $justify: center, $align: center);

        h1 {
            text-align: center;
            font-size: 1.8rem;
            font-weight: 700;

            @include useTheme {
                color: getVar('fc');
            }

            vertical-align: top;
        }

        .form {
            width: 57%;
            padding-top: 7rem;

            .el-form-item {
                margin-bottom: 2rem;
            }

            :deep(.el-form-item__label) {
                color: rgba(125, 133, 146, 1);
                font-weight: normal;
                font-size: 0.9rem;
                margin-bottom: 1rem;
            }

            :deep(.el-checkbox__label) {
                font-size: 1.2rem;
            }

            :deep(.el-checkbox__inner) {
                width: 1.2rem;
                height: 1.2rem;
            }

            a {
                font-size: 1.2rem;
            }

            :deep(.el-input__wrapper) {
                border-radius: 0.5rem;
                width: 10rem;
                height: 3rem;
                font-size: 1.2rem;
                padding: 0.1rem 1rem;
            }

            :deep(.el-button) {
                border-radius: 1rem;
                font-size: 0.8rem;
                font-weight: 400;
                letter-spacing: 0.1rem;
                height: 3rem;
                padding: 0;
            }

            .code-v {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;

                img {
                    width: 12rem;
                    height: 3rem;
                    padding-left: 3rem;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
