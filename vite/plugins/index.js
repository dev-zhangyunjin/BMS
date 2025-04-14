import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createCompression from './compression'
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from "unplugin-vue-components/vite";
export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue(), AutoImport({
        resolvers: [ElementPlusResolver()]
    }),
    Components({
        resolvers: [ElementPlusResolver()]
    })]
    vitePlugins.push(createAutoImport())
    isBuild && vitePlugins.push(...createCompression(viteEnv))
    return vitePlugins
}