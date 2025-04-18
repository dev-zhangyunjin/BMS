<template>
    <el-menu default-active="" :collapse="isCollapse">
        <template v-for="item in menuArray" :key="item.path">
            <template v-if="item.children?.length > 0">
                <el-sub-menu :index="item.path">
                    <template #title>
                        <el-icon>
                            <Cssicon :name="item.icon" />
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item-group>
                        <template v-for="chi in item.children" :key="chi.path">
                            <router-link :to="item.path + '/' + chi.path" style=" text-decoration: none">
                                <el-menu-item :index="chi.path">
                                    <template #title>
                                        <el-icon>
                                            <Cssicon :name="chi.icon" />
                                        </el-icon>
                                        <span>
                                            {{ chi.name }}
                                        </span>
                                    </template>
                                </el-menu-item>
                            </router-link>
                        </template>

                    </el-menu-item-group>
                </el-sub-menu>
            </template>
            <template v-else>
                <router-link :to="item.path" style=" text-decoration: none">
                    <el-menu-item :index="item.path">
                        <el-icon>
                            <Cssicon :name="item.icon" />
                        </el-icon>
                        <template #title>{{ item.name }}</template>
                    </el-menu-item>
                </router-link>

            </template>
        </template>

    </el-menu>
</template>

<script setup>
/**
* @author 张云进
* @description 菜单列表
*/
const isCollapse = ref(false)
const menuArray = ref([{
    name: '首页',
    path: '/index',
    icon: 'ant-design:home-outlined'
}, {
    name: '系统管理',
    path: '/system',
    icon: 'tdesign:system-setting',
    children: [{
        name: '用户管理',
        path: 'user',
        icon: 'solar:user-bold'
    }, {
        name: '角色管理',
        path: 'role',
        icon: 'oui:app-users-roles'
    }]
}])
</script>

<style lang='scss' scoped>
:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
    font-size: 1.2rem;

}
</style>
