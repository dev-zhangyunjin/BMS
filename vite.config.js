import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// const { resolve } = require("path")


// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env);
  return {
    root: '',
    base: '/webapp/',
    plugins: [vue()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
