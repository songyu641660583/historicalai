import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import store from '@/store'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import DdTable from '@/components/Table/index.vue'
import 'animate.css'
import './style.css'
import 'element-plus/dist/index.css'

// 定义全局组件
const components = { DdTable }

type ComponentType<T, K> = {
  [P in keyof K]: T
}

const app = createApp(App)

let key: keyof ComponentType<Component, typeof components>
for (key in components) {
  if (Object.prototype.hasOwnProperty.call(components, key)) {
    app.component(key, components[key])
  }
}
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(router).use(store)
app.mount('#app')