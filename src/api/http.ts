import request from './request'
type RequesteType = 'post' | 'get' | 'delete' | 'put'

const api = (
  url: string,
  params: object,
  method: RequesteType = 'post',
  extralConfig?: any
) => {
  return new Promise((resolve, reject) => {
    request[method]?.(url, params, Object.assign({}, extralConfig))
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const post = (url: string, params: object, extralConfig?: any) => {
  return api(url, params, 'post', extralConfig)
}

export const get = (url: string, params?: object, extralConfig?: any) => {
  return api(url, { params, extralConfig }, 'get')
}

export const del = (url: string, params?: object, extralConfig?: any) => {
  return api(url, { data: params, extralConfig }, 'delete')
}

export const put = (url: string, params: object, extralConfig?: any) => {
  return api(url, params, 'put', extralConfig)
}


