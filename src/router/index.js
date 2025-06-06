import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import HomeView from '../pages/home.vue'
import LoginView from '../pages/login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router