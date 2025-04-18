<template>
    <div class="aside-container">
        <div class="aside-header">
            <img :src="logo" />
            <h1>数据管理平台</h1>
        </div>
        <div>
            <Menu></Menu>
        </div>
        <div class="aside-footer" @click="handleLogout">
            <Cssicon name="mdi-light:logout" />
            <span class="logout-text">
                退出登录
            </span>
        </div>
    </div>

</template>

<script setup name="aside">
/**
* @author 张云进
* @description 侧边菜单栏
*/
import logo from "@/assets/images/logo.png"
import Menu from "./Menu.vue"
const handleOpen = () => { }
const handleClose = () => { }
const isCollapse = ref(false)
const handleLogout = () => {
    console.log("logout ----");

}
</script>

<style lang='scss' scoped>
@use '@/assets/styles/global.scss' as global;

.aside-container {
    background-color: #fff;
    border-radius: 10px;
    margin: 16px;
    height: calc(100% - 32px);
    position: relative;
    // min-width: 160px;

    .aside-header {
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
        padding: 1rem 0;
        @include global.flex-layout($justify: center, $align: center);

        img {
            width: 3rem;
            padding-right: 0.5rem;
        }
    }

    .aside-footer {
        @include global.flex-layout($justify: center, $align: center);

        cursor: pointer;
        position: absolute;
        bottom: 0;
        left: 25%;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 31.62px;
        color: rgba(125, 133, 146, 1);

        .logout-text {
            padding-left: 0.5rem;
        }
    }
}
</style>
