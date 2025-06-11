import { post } from '../http'
const PROXY_URL_ENUM:  any = {
  development: 'https://bm-cloud-dev.dingcloud.com',
  alpha: 'https://bm-cloud-alpha.dingcloud.com',
  production: 'https://bm-cloud.dingcloud.com'
}
const apiUrl = PROXY_URL_ENUM[import.meta.env.VITE_MODE_ENV]


export default {
  login: (data: any) => post(apiUrl + '/login', data), // 登录
  sign: (data: any) => post(apiUrl + '/sign', data),// 注册
  getVerificationCode: (data: any) => post(apiUrl + '/verification_code', data), // 获取验证码
  generatingVideo: (data: any) => post(apiUrl + '/generating_caricature_video', data), // 生成漫画视频
  getVoiceList: (data: any) => post(apiUrl + '/voices', data), // 获取语音列表
  getBill: (data: any) => post(apiUrl + '/bill', data), // 获取账单
  getBalance: (data: any) => post(apiUrl + '/balance', data), // 获取余额
}
