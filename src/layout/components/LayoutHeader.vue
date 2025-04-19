<template>
    <div class="head-container">
        <el-input v-model="search" placeholder="搜索">
            <template #prefix>
                <Cssicon name="ri:search-line" />
            </template>
        </el-input>
        <div class="bell-user-container">
            <Cssicon name="mynaui:sun-solid" @click="handleTheme('light')" style="color: #fff;"
                v-if="theme === 'dark'" />
            <Cssicon name="bitcoin-icons:moon-outline" @click="handleTheme('dark')" style="color: #000;" v-else />
            <div class="bell">
                <Cssicon name="mdi-light:bell" />
            </div>
            <div class="user-container">
                <img :src="userLogo" />
                <span>
                    admin
                </span>
                <Cssicon name="mingcute:down-line" style="font-size: 1.2rem; margin-left: 0.5rem;" />
            </div>
        </div>
    </div>
</template>

<script setup>
/**
* @author 张云进
* @description 
*/
import userLogo from "@/assets/images/user.png"
import useStore from "@/pinia";
const theme = ref('')
onMounted(() => {
    theme.value = useStore().setting.getTheme();
})
const search = ref('')
const handleTheme = (val) => {
    useStore().setting.setTheme(val);
    theme.value = useStore().setting.getTheme();
}
</script>

<style lang='scss' scoped>
$bell-bcc: #fff;
@use "@/styles/theme.scss" as theme;

.head-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-input {
        width: 20rem;
    }

    .bell-user-container {
        display: flex;
        align-items: center;
        cursor: pointer;

        .bell {
            margin-left: 3rem;

            @include theme.useTheme {
                background-color: theme.getVar('bac');
                color: theme.getVar('fc');
            }

            // background-color: $bell-bcc;
            padding: 0.5rem;
            border-radius: 0.4rem;
        }

        .user-container {
            font-size: 1rem;
            display: flex;
            align-items: center;
            // background-color: rgba(61, 52, 27);

            @include theme.useTheme {
                background-color: theme.getVar('bac');
                color: theme.getVar('fc');

            }

            padding: 0.2rem 1rem;
            margin-left: 2rem;
            border-radius: 0.4rem;

            img {
                width: 2.5rem;
            }

            span {
                // line-height: 2.5rem;
                display: inline-block;
                margin-left: 0.6rem;
            }
        }
    }
}
</style>
