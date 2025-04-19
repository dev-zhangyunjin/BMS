import userStore from "./modules/user";
import permissionStore from "./modules/permission";
import settingStore from "./modules/setting";
const useStore = () => {
    return {
        permission: permissionStore(),
        user: userStore(),
        setting: settingStore()
    }
}
export default useStore;