import router from "./router"
import { getToken } from "@/utils/auth"
import NProgress from 'nprogress'
const whiteList = ['/login'];

NProgress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
    NProgress.start()
    const path = to.path;
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: "/" })
            NProgress.done()
        } else if (whiteList.indexOf(to.path !== -1)) {
            next()
        } else {

        }
    } else {
        if (whiteList.includes(path) !== -1) {
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
