<template>
    <div class="layout-container">
        <aside class="aside-container">
            <LayoutSide></LayoutSide>
        </aside>
        <div class="main-container">
            <header class="header">
                <LayoutHeader />
            </header>
            <main class="main">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>
/**
* @author 张云进
* @description layout 页面
*/
import LayoutSide from "./components/LayoutSide"
import LayoutHeader from "./components/LayoutHeader";
import { getToken } from "@/utils/auth"
const router = useRouter()
onMounted(() => {

})
</script>

<style lang='scss' scoped>
@use "@/styles/theme.scss" as theme;

.layout-container {
    @include theme.useTheme {
        background-color: theme.getVar('bac-m');
    }

    display: flex;
    height: calc(100% - 2rem);
    padding: 1rem 2rem;

    .aside-container {
        width: 16.67rem;
        box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
        border-radius: 2rem;

        @include theme.useTheme {
            background-color: theme.getVar('bac');
        }

        position: relative;
    }

    .main-container {
        width: 100%;
        margin: 0 0 0 2rem;

        .header {
            height: 4rem;

        }

        .main {
            height: calc(100% - 4rem);

            @include theme.useTheme {
                color: theme.getVar('fc');
            }
        }
    }
}
</style>
