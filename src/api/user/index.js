import request from '@/utils/request'
export const userLogin = () => {
    return Promise.resolve({
        token: "abcdefg",
        user: {
            userName: "admin"
        }
    })
    // const data = {}
    // return request({
    //     url: '/login',
    //     headers: {
    //         isToken: false,
    //         repeatSubmit: false
    //     },
    //     method: false,
    //     data: data
    // })
}
export const userLogout = () => {
    return Promise.resolve({

    })
}