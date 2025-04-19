import { defineStore } from "pinia"
import { userLogin, userLogout } from "@/api/user"
import { setToken, removeToken } from "@/utils/auth"
const userStore = defineStore("user", {
    state: () => ({
        token: '',
        user: {}
    }),
    getters: {

    },
    actions: {
        login(user) {
            return new Promise((resolve, reject) => {
                userLogin(user).then(res => {
                    setToken(res.token)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        logout() {
            return new Promise((resolve, reject) => {
                userLogout().then(res => {
                    removeToken()
                    resolve()
                })
            })

        }
    }
})
export default userStore