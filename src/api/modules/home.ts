import { post } from '../http'
// import getConfig from '../../../config/index'
// const { proxyUrl } = getConfig(import.meta.env)
// const PROXY_URL_ENUM:  any = {
//   development: 'http://www.historicalai.cn',
//   alpha: 'http://www.historicalai.cn',
//   production: 'http://www.historicalai.cn'
// }
// const apiUrl = PROXY_URL_ENUM[import.meta.env.VITE_MODE_ENV]


export default {
  login: (data: any) => post('/api/login', data), // 登录
  sign: (data: any) => post('/api/sign', data),// 注册
  getVerificationCode: (data: any) => post('/api/code', data), // 获取验证码
  generatingVideo: (data: any) => post('/api/generatingv2', data), // 生成漫画视频
  getVoiceList: (data: any) => post('/api/voices', data), // 获取语音列表
  getBill: (data: any) => post('/api/bill', data), // 获取账单
  getBalance: (data: any) => post('/api/balance', data), // 获取余额
  getWeChatQyCode: (data: any) => post('/api/qr_code', data), // 获取微信支付二维码
  payDetails: (data: any) => post('/api/paydetail', data), // 获取支付结果
  retext2img: (data: any) => post('/api/retext2img', data), // 重新生成图片
  retext2audio: (data: any) => post('/api/retext2audio', data), // 重新生成音频
  regenerating: (data: any) => post('/api/regenerating', data), // 重新生成视频
  bookCate: (data: any) => post('/api/bookcate', data), // 获取书籍类别
  book: (data: any) => post('/api/book', data), // 获取书籍列表
  booklistings: (data: any) => post('/api/booklistings', data), // 获取书籍目录
  booktext: (data: any) => post('/api/booktext', data), // 获取书籍正文
  deepseek: (data: any) => post('/api/deepseek', data), // 获取deepseek
}
