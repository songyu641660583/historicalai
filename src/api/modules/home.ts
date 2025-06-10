import { get } from '../http'
import getConfig from '../../../config/index'

const { authUrl } = getConfig(import.meta.env)

export default {
  getCompanyInfo: (data: any) => get(authUrl + '/upms/biz/tenant/overview', data), // 企业概括
  getCompanyBaseInfo: (data: any) => get(authUrl + '/upms/biz/tenant/baseInfo', data) // 企业基本信息
}
