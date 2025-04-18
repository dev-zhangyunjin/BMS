<template>
    <div class="head-container">
        <el-input v-model="search" placeholder="搜索">
            <template #prefix>
                <Cssicon name="ri:search-line" />
            </template>
        </el-input>
        <div class="bell-user-container">
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
const search = ref('')
</script>

<style lang='scss' scoped>
$bell-bcc: #fff;

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
            background-color: $bell-bcc;
            padding: 0.5rem;
            border-radius: 0.4rem;
        }

        .user-container {
            font-size: 1rem;
            display: flex;
            align-items: center;
            background-color: $bell-bcc;
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
