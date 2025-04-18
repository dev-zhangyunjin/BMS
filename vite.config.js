import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import createVitePlugins from './vite/plugins'
import { resolve } from "path";
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    root: '',
    base: '/webapp/',
    plugins: createVitePlugins(env, command === 'build'),
    mode: "development",
    resolve: {
      // 为路径取别名
      alias: {
        '@': resolve(__dirname, "src"),
        '~': resolve(__dirname)
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
        scss: {
          // additionalData: '@use "@/assets/styles/index.scss";'
        }
      },
    },
    server: {
      port: 3000,
      host: true,
      proxy: {
        '/api': {
          target: 'http://101.35.56.170:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
