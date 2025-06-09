import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import HomeView from '../pages/home.vue'
import LoginView from '../pages/login.vue'
import RegisterView from '../pages/register.vue'
import MainView from '../pages/main/index.vue'
import Creationiew from '../pages/main/creation.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
      hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
      hidden: true
  },
  {
    path: '/regiser',
    name: 'Regiser',
    component: RegisterView,
      hidden: true
  },
  {
    path: '/main',
    name: 'MainView',
    text: '智能广场',
    component: MainView,
    children: [
      {
        path: 'creation',
        text: '漫绘创作',
        name: 'Creationiew',
        component: Creationiew
      },
        {
        path: 'creation',
        text: '充值',
        name: 'Creationiew',
        component: Creationiew
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router