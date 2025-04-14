<template>
    <div class="header-container">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="header-right">
            <div class="bell-v">
                <el-badge :value="12">
                    <Cssicon name="line-md:bell-loop" />
                </el-badge>
            </div>
            <el-dropdown>
                <div class="user-info">
                    <img :src="userLogo" />
                    <span>alex</span>
                    <el-icon>
                        <Cssicon name="lsicon:down-outline" />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
    <Tags></Tags>
</template>

<script setup>
/**
* @author 张云进
* @description LayoutHeader
*/
import userLogo from "@/assets/images/user.png"
import Tags from "./Tags"
const search = ref('')
</script>

<style lang='scss' scoped>
.header-container {
    // height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-right {
        display: flex;
        align-items: center;

        .bell-v {
            font-size: 1.5rem;
            background-color: #fff;
            padding: 6px;
            border-radius: 5px;
            margin-right: 32px;
            cursor: pointer;
            box-shadow: 0px 8.47px 81.88px rgba(196, 203, 214, 0.1);
        }

        .user-info {
            padding: 0 6px;
            font-size: 1.2rem;
            background-color: #fff;
            display: flex;
            align-items: center;
            border-radius: 4px;
            left: 72px;
            font-weight: 400;
            color: rgba(10, 22, 41, 1);

            img {
                width: 42px;
                padding: 0 6px;

            }
        }

        .el-dropdown {
            border: 0px;
        }
    }
}

.tag-v {
    // background-color: rgb(242, 242, 242);
}
</style>
