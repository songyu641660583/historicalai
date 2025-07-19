import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import HomeView from '../pages/home.vue'
import LoginView from '../pages/login.vue'
import RegisterView from '../pages/register.vue'
import MainView from '../pages/main/index.vue'
import Creationiew from '../pages/main/creation.vue'
import BillRevordView from '../pages/main/billRecord.vue'
import RechargeView from '../pages/main/recharge.vue'
import ConfirmPayView from '../pages/main/confirmPay.vue'
import DeepSeekView from '../pages/main/deepSeek.vue'
import StoryBoolView from '../pages/main/storyBooks.vue'
import HelpView from '../pages/main/help.vue'

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
    path: '/register',
    name: 'Register',
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
        component: Creationiew,
        iconName: 'video-icon'
      },
           {
        path: 'deepseek',
        text: 'deepseek',
        name: 'DeepSeek',
        component: DeepSeekView,
        iconName: 'deepseek-icon'
      },
        {
        path: 'storyBooks',
        text: '故事集',
        name: 'StoryBooks',
        component: StoryBoolView,
        iconName: 'book-icon'
      },
        {
        path: 'recharge',
        text: '充值',
        name: 'RechargeView',
        component: RechargeView,
        iconName: 'pay-icon'
      },
       {
        path: 'confirmPay',
        text: '确认支付',
        name: 'ConfirmPay',
        component: ConfirmPayView,
        hidden: true
      },
       {
        path: 'billRevord',
        text: '账单',
        name: 'BillRevordView',
        component: BillRevordView,
        iconName: 'bill-icon'
      },
      //  {
      //   path: 'help',
      //   text: '帮助文档',
      //   name: 'HelpView',
      //   component: HelpView,
      //   iconName: 'help-icon'
      // },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router