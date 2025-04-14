import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import App from './App.vue'
// icon 组件
import Cssicon from "@/components/Cssicon"
// 引入css
import '@/assets/styles/index.scss'
// 导入路由
import router from "./router";
// 权限控制
import "./permission"
// pinia
const pinia = createPinia()
const app = createApp(App)
app.component('Cssicon', Cssicon)
app.use(ElementPlus, { zIndex: 3000 })
app.use(pinia)
app.use(router)
app.mount('#app')
