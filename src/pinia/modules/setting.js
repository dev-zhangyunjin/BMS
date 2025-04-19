import { defineStore } from "pinia";
import cache from "@/plugins/cache"
const settingStore = defineStore("setting", {
    state: () => ({
        theme: 'light'
    }),
    actions: {
        setTheme(val) {
            cache.local.set("theme", val);
            this.initTheme();
        },
        getTheme() {
            return cache.local.get("theme");
        },
        initTheme() {
            const dom = document.querySelector('html')
            dom.setAttribute('data-theme', cache.local.get("theme"))
            dom.classList = cache.local.get("theme")
        }
    }
})
export default settingStore