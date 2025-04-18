import userStore from "./modules/user"
import permissionStore from "./modules/permission"
const useStore = () => {
    return {
        permission: permissionStore(),
        user: userStore()
    }
}
export default useStore;