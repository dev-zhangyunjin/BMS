import { createWebHistory, createRouter } from 'vue-router'
import Layout from "@/layout"
// 公共路由
const constantRoutes = [{
    path: '/login',
    component: () => import("@/views/login")
}, {
    path: '/',
    component: Layout
}]
const router = createRouter({
    history: createWebHistory('/webapp/'),
    routes: constantRoutes,
})
export default router