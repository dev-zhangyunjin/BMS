import { defineStore } from "pinia"
import { userPermissionResources } from "@/api/user"
const permissonStore = defineStore("permisson", {
    state: () => ({
        // 权限路由
        permissionRoutes: [],
        // tag区路由
        tagRoutes: [],
        // 面包屑路由
        crumbsRoutes: []
    }),
    getters: {

    },
    actions: {
        getRoutes() {
            userPermissionResources().then(res => { })
        },

    }
})
export default permissonStore