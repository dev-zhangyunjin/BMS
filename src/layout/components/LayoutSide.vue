<template>
    <div class="side-container">
        <div class="logo-container">
            <img :src="Logo" alt="logo">
            <h1>数据管理后台</h1>
        </div>
        <div class="menu-container">
            <el-scrollbar style="height: 100%;">
                <div class="menu-item" v-for="item in menus" :key="item.path">
                    <template v-if="item.children?.length > 0">
                        <div class="item-head">
                            <span class="head-v">
                                {{ item.meta.title }}
                            </span>
                        </div>
                        <template v-for="child in item.children" :key="child.path">
                            <router-link class="menu-sec-content"
                                :class="currentPath === (item.path + '/' + child.path) ? 'active' : ''"
                                @click.prevent="handleTo(child.path)" :to="item.path + '/' + child.path">
                                <div class="menu-sec">
                                    <Cssicon :name="child.meta.icon" />
                                    <div class="menu-sec-tex">
                                        <span>{{ child.meta.title }}</span>
                                    </div>
                                </div>
                            </router-link>
                        </template>
                    </template>
                    <template v-else>
                        <router-link class="menu-sec-content" :class="currentPath === item.path ? 'active' : ''"
                            @click.prevent="handleTo(item.path)" :to="item.path">
                            <div class="menu-sec">
                                <Cssicon :name="item.meta.icon" />
                                <div class="menu-sec-tex">
                                    <span>{{ item.meta.title }}</span>
                                </div>
                            </div>
                        </router-link>
                    </template>
                </div>
            </el-scrollbar>

        </div>
        <div class="logout-container">
            <Cssicon name="material-symbols:logout-rounded" />
            <div class="logout-text" @click="handleLogout">
                <span>退出登录</span>
            </div>
        </div>
    </div>
</template>

<script setup name="layoutSide">
/**
* @author 张云进
* @description 侧边菜单栏
*/
import Logo from "@/assets/images/logo.png"
import { computed } from "vue"
const menus = ref([{
    path: "/nav",
    meta: { title: '导航', icon: '' },
    children: [{
        path: "board",
        meta: { title: '数据看板', icon: 'hugeicons:paint-board' },
    }, {
        path: "order",
        meta: { title: '订单', icon: 'icon-park-outline:shopping' },
    }, {
        path: "goods",
        meta: { title: '商品列表', icon: 'ep:goods' },
    }, {
        path: "operation",
        meta: { title: '运营数据', icon: 'lsicon:operation-outline' },
    }]
}, {
    path: "/selling",
    meta: { title: '销售渠道', icon: '' },
    children: [{
        path: "application",
        meta: { title: '订购应用', icon: 'ix:add-application' },
    }, {
        path: "store",
        meta: { title: '我的店铺', icon: 'hugeicons:store-location-01' },
    }, {
        path: "discount",
        meta: { title: '折扣', icon: 'iconamoon:discount-thin' },
    }]
}, {
    path: "/system",
    meta: { title: '系统管理', icon: '' },
    children: [{
        path: "user",
        meta: { title: '系统设置', icon: 'uil:setting' },
    }, {
        path: "help",
        meta: { title: '帮助中心', icon: 'material-symbols:help-outline' },
    }]
},])
// const currentPath = ref('')
const route = useRoute();
const currentPath = computed(() => {
    console.log(route.path);

    return route.path
})
const handleTo = (path) => {
    // currentPath.value = path;
}
const handleLogout = () => { }
</script>

<style lang='scss' scoped>
$logo-f-c: rgba(0, 0, 0, 1);
$menu-head-f-c: rgba(160, 174, 192, 1);
$menu-head-b-c: rgba(238, 239, 242, 1);
// 激活背景颜色
$menu-active-bc: rgba(235, 243, 255, 1);
// 激活右边框颜色
$menu-active-b-bc: rgba(63, 140, 255, 1);
// 激活后的字体颜色
$menu-active-f-c: rgba(63, 140, 255, 1);
// 未激活字体颜色
$menu-f-c: rgba(113, 128, 150, 1);

.side-container {
    height: calc(100% - 8rem);

    .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2.05rem;

        img {
            width: 1.95rem;
        }

        h1 {
            padding-left: 1rem;
            font-size: 1.3rem;
            font-weight: 700;
        }
    }

    .menu-container {
        height: 100%;

        .menu-item {
            .item-head {
                .head-v {
                    display: block;
                    font-size: 1rem;
                    font-weight: 400;
                    color: $menu-head-f-c;
                    padding: 2.2rem 0 0.9rem 1.4rem;
                    border-bottom: 0.1rem solid $menu-head-b-c;
                }
            }

            .menu-sec-content {
                text-decoration: none;
                // background-color: red;
                display: block;
                color: $menu-f-c;
                margin-top: 0.5rem;

                .menu-sec {
                    display: flex;
                    align-items: center;
                    font-size: 1rem;
                    margin: 0.4rem 1.4rem;
                    padding: 0.4rem 0.7rem;
                    // background-color: $menu-active-bc;
                    border-radius: 0.5rem;

                    .menu-sec-tex {
                        margin-left: 1rem;
                    }
                }
            }

            .active {
                border-right: 0.15rem solid $menu-active-b-bc;
                color: $menu-active-f-c;

                .menu-sec {
                    background-color: $menu-active-bc
                }
            }


        }
    }

    .logout-container {
        border-top: 0.1rem solid $menu-head-f-c ;
        padding-top: 1rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(125, 133, 146, 1);
        cursor: pointer;

        .logout-text {
            padding-left: 0.3rem;
        }
    }
}
</style>
