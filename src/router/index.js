import { createWebHistory, createRouter } from 'vue-router'
import Layout from "@/layout"
// 公共路由
const constantRoutes = [{
    path: '/login',
    component: () => import("@/views/login")
}, {
    path: '',
    component: Layout,
    children: [{
        path: '/index',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
}, {
    path: '/system',
    component: Layout,
    children: [{
        path: 'user',
        component: () => import('@/views/system/user'),
        name: 'User',
        meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
}]
const router = createRouter({
    history: createWebHistory('/webapp/'),
    routes: constantRoutes,
})
export default router