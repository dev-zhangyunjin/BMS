<template>
    <el-container class="layout-container">
        <el-aside class="layout-aside">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header class="layout-header">
                <LayoutHeader></LayoutHeader>
            </el-header>
            <el-main class="layout-main">
                <div class="app-contaner">
                    <router-view></router-view>
                </div>
            </el-main>
            <!-- <el-footer></el-footer> -->
        </el-container>
    </el-container>
</template>

<script setup name="layout">
/**
* @author 张云进
* @description layout
*/
import Aside from './components/Aside';
import LayoutHeader from './components/LayoutHeader'
const route = useRoute();
onMounted(() => {
    // 获取菜单资源

    // 获取功能权限
})
</script>

<style lang='scss' scoped>
.layout-container {
    height: 100%;
    width: 100%;
    background-color: rgba(242, 248, 252, 1);

    .el-aside {
        width: 10%;
        min-width: 200px;
    }

    .el-container {
        .el-header {
            // height: 5%;
            padding: 6px;
            min-height: 75px;
            // background-color: pink;
        }

        .el-main {
            background-color: rgba(242, 248, 252, 1);
            height: 100%;
            padding: 20px 10px 20px 4px;

            .app-contaner {
                height: 100%;
                background-color: #fff;
            }
        }

        .el-footer {
            background-color: yellowgreen;
        }
    }


    // .layout-main {
    //     height: 200%;
    // }
}
</style>
