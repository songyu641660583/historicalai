import { defineStore } from 'pinia'
// import api from '@/api'
import { setToken, removeToken, getToken } from '@/utils/auth'
import router from '@/router'
// import { authLogout } from '@/api/modules/auth'

const userStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      userInfo: {}, // 用户信息
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'USER_INFO',
        storage: localStorage,
        paths: ['userInfo']
      }
    ]
  },
  getters: {
  
    getUserInfo(): any {
      console.log('this.userInfo', this.userInfo)
      return (this.userInfo as any)?.user_id ? this.userInfo : {}
    },
    getIsLogin(): boolean {
      return (this.userInfo as any)?.user_id ? true : false
    }
  },
  actions: {
    // 设置用户信息
    setUserInfo(data: any) {
      if (!data) return
      this.userInfo = data
    },
   
   
    // 登出
    logout() {

      // const token = this.getToken
      this.userInfo = {}
      router.push('/')
      // removeToken()
      // authLogout(token)
   
    }
  }
})

export default userStore
