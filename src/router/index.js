import { createWebHistory, createRouter } from 'vue-router'
import Layout from "@/layout"
// 公共路由
const constantRoutes = [{
    path: '/login',
    component: () => import("@/views/login")
}, {
    path: '/nav',
    component: Layout,
    children: [{
        path: 'board',
        component: () => import('@/views/index'),
        name: 'Board',
        // meta: { title: '首页', icon: 'dashboard', affix: true }
    }, {
        path: 'order',
        component: () => import('@/views/nav/order'),
        name: 'Order',
    }, {
        path: 'goods',
        component: () => import('@/views/nav/goods'),
        name: 'Goods',
    }, {
        path: 'operation',
        component: () => import('@/views/nav/operation'),
        name: 'Operation',
    }]
}, {
    path: '/selling',
    component: Layout,
    children: [{
        path: 'application',
        component: () => import('@/views/selling/application'),
        name: 'Selling',
    }, {
        path: 'store',
        component: () => import('@/views/selling/store'),
        name: 'Store',
    }, {
        path: 'discount',
        component: () => import('@/views/selling/discount'),
        name: 'Discount',
    }]
}, {
    path: '/system',
    component: Layout,
    children: [{
        path: 'user',
        component: () => import('@/views/system/user'),
        name: 'User',
        meta: { title: '首页', icon: 'dashboard', affix: true }
    }, {
        path: 'help',
        component: () => import('@/views/system/help'),
        name: 'Help',
        meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
}, {
    path: "/:pathMatch(.*)*",
    component: () => import('@/views/error/404'),
    hidden: true
}]
const router = createRouter({
    history: createWebHistory('/webapp/'),
    routes: constantRoutes,
})
export default router