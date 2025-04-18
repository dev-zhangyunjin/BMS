import request from '@/utils/request'
import { Header } from 'element-plus/es/components/table-v2/src/components/index.mjs'
// 获取验证码
export const getCaptchaImage = () => {
    return request({
        url: 'captchaImage',
        Headers: {
            token: false,
        }
    })
}
// 登录
export const userLogin = (data) => {
    return request({
        url: 'login',
        Headers: {
            token: false,
        },
        data,
        method: 'post'
    })
}
// 退出登录
export const userLogout = () => {
    return Promise.resolve({

    })
}
// 获取用户权限资源
export const userPermissionResources = () => {
    return Promise.resolve({
        routes: [{
            name: '系统管理',
            pid: 0,
            id: 1,
            path: 'system',
            icon: '',
            hidden: false,
        }]
    })
}