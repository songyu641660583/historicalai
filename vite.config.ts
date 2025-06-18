import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import addProxyOptions from './config/proxy'

export default defineConfig((env) => {
  const viteEnv = loadEnv(env.mode, process.cwd())
  let options = {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
  addProxyOptions(options, viteEnv)

  return options
})
