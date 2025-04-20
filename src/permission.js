import router from "./router"
import { getToken } from "@/utils/auth"
import NProgress from 'nprogress'
const whiteList = ['/login'];
NProgress.configure({ showSpinner: true });
router.beforeEach((to, from, next) => {
    NProgress.start()
    const path = to.path;
    if (getToken()) {
        // debugger
        if (path === '/login') {
            next({ path: "/nav/board" })
            NProgress.done()
        } else if (whiteList.indexOf(path) !== -1) {
            next()
        } else if (path === '/') {
            next({ path: "/nav/board" })
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(path) !== -1) {
            next()
        } else {
            // 路由重定向至登录页
            next(`/login?redirect=${to.fullPath}`)
            NProgress.done()
        }
    }
})
router.afterEach(() => {
    NProgress.done()
})
