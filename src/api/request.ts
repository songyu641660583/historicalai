import axios from 'axios'
import qs from 'qs'
import { ElMessage } from 'element-plus'
import { ContentType } from './type'
// import { getToken } from '@/utils/auth'
// import { useUserStore } from '@/store'
import router from '../router'


const request = axios.create({
  baseURL: '',
  timeout: 10000
})
// request.defaults.withCredentials = true
request.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
request.defaults.headers.common['Content-Type'] = ContentType.JSON

const CancelToken = axios.CancelToken
const requestMap = new Map() // 存储每次的请求

// 关闭已存在的请求
const cancelRequest = <T>(key: T) => {
  const c = requestMap.get(key)
  if (typeof c === 'function') {
    c()
    cleanMap<T>(key)
  }
}

const setMap = <T>(key: T, c: () => void) => {
  if (!key) return
  requestMap.set(key, c)
}

const cleanMap = <T>(key?: T) => {
  if (!key) return
  requestMap.delete(key)
}

request.interceptors.request.use(
  (config: any) => {
    const extralConfig = config.extralConfig
    const key: string = (config.url || '') + (config.method || '')
    if(!config.skipCancel && !extralConfig?.skipCancel){
      cancelRequest<string>(key)
      config.cancelToken = new CancelToken((c) => {
        setMap<string>(key, c)
      })
    }

    // const token = getToken()
    const token = 1345

    if (config.method === 'get') {
      config.data = true
    }
    // 添加需要额外的headers
    if (extralConfig?.isExtral || config?.isExtral) {
      const extralHeaders = extralConfig?.headers
      if (extralHeaders) {
        Object.assign(config.headers![config.method as any], extralHeaders)
      }
    }

    // 除了自定义Authorization 其他接口需要默认添加
    if (!extralConfig?.headers?.Authorization && !config.headers?.Authorization && token) {
      config.headers!['Authorization'] = 'Bearer ' + token
    }

    if (config?.isStringify || extralConfig?.isStringify) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response: any) => {
    const config = response?.config
    config && cleanMap(config?.url || '' + config?.method)
    const { data, message, code } = response.data
    // if (code === undefined) {
    //   return response.data
    // }

    if (code === 0) {
      return data
    }
    errorHandle(code, message || '请求异常')

    return Promise.reject(response.data)
  },
  (error: any) => {
    const isCancel = axios.isCancel(error)
    const config = error?.config
    // 清除cancelToken
    config && cleanMap(config.url + config.method)
    if (!isCancel) {
      errorHandle(error.response?.status, error.response?.data?.message || '请求异常')
    }
    return Promise.reject({
      ...error,
      isCancel
    })
  }
)

const errorTips = (errMsg: string = '网络错误，请重试') => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: `<div style="max-width:800px;word-break: break-all;">${errMsg}</div>`,
    type: 'error',
    duration: 3 * 1000,
    // center: true
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {number} status 请求失败的状态码
 * @param {string} msg 提示文案
 */
//  状态码
//  400 请求异常
//  401 未登录 / token已过期
//  403 未授权，禁止访问
//  404 找不到资源
//  500 无法预知的异常
//  200 根据code判断是否成功
//    code=10000，成功
//    code=400，请求异常
//    code=401，未登录 / token已过期
//    code=403，未授权，禁止访问
//    code=404，找不到资源
//    code=500，无法预知的异常
//    code=其他值，都是需要根据code特殊处理的
export const errorHandle = (status: number, msg?: string) => {
  // const userStore = useUserStore()
  // 校验错误
  switch (status) {
    case 401: 
      errorTips(msg || '登录过期')
      setTimeout(() => {
        // userStore.logout?.()
      }, 200)
      break
    case 403:
      errorTips(msg || '暂无权限')
      router.push('/403')
      break
    case 404:
      errorTips(msg || '网络请求不存在')
      break
    case 500:
    case 400: 
    case -1:
      errorTips(msg || '请求异常')
      break
  }
}

export default request
