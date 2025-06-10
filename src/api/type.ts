export enum ContentType {
  JSON = 'application/json; charset=UTF-8',
  FORM = 'application/x-www-form-urlencoded; charset=UTF-8'
}
export type ExtralHeaders = {
  'TENANT-ID'?: string
  'Content-Type'?: string
  'Authorization'?: string
}

export type ConfigType = {
  isExtral?: boolean  // 是否含有额外的参数
  headers?: ExtralHeaders // 额外的请求头
  isStringify?: boolean  // 字符串格式
  skipCancel?: boolean // 跳过接口cancel
}

export type RequesteType = 'post' | 'get' | 'delete' | 'put'
