import { defineStore } from "pinia"
import { userLogin, userLogout } from "@/api/user"
import { setToken, removeToken } from "@/utils/auth"
const userStore = defineStore("user", {
    state: () => ({
        token: '111',
        user: {}
    }),
    getters: {

    },
    actions: {
        login(user) {
            const { userName, password } = user;
            return new Promise((resolve, reject) => {
                userLogin({ userName, password }).then(res => {
                    setToken(res.token)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        logout() {
            userLogout().then(res => {
                removeToken()
            })
        }
    }
})
export default userStore