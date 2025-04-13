import userStore from "./modules/user"
import permissionStore from "./modules/user"
const useStore = () => {
    return {
        permission: permissionStore(),
        user: userStore()
    }
}
export default useStore;