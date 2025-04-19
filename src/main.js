import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import App from './App.vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import Cssicon from "@/components/Cssicon";
import '@/styles/index.scss';
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from "./router";
import "./permission";
const pinia = createPinia();
const app = createApp(App);
app.component('Cssicon', Cssicon);
app.use(ElementPlus, {
    zIndex: 3000,
    locale: zhCn,
});
app.use(pinia);
app.use(router);
app.mount('#app');
