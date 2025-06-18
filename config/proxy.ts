import getConfig from './index'

/**
 * 解析配置
 * @param {Object} options
 */
function addProxyOptions(options, viteEnv) {
  const { proxyUrl } = getConfig(viteEnv)
  /**
   * 配置接口拦截规则： 数组对象,可代理多个不同目标地址
   * {
   *    path： 代理标识
   *    pathRewrite：标识处理规则
   *    apiProxyTarget：目标地址
   * }
   */
  const apiProxyMatches = [
    { path: '^/api', pathRewrite: { '^/api': ''}, apiProxyTarget: proxyUrl },
  ]

  const devProxyOptions = {}
  apiProxyMatches.forEach((api: any) => {
    devProxyOptions[api.path] = {
      target: api.apiProxyTarget,
      // pathRewrite: api.pathRewrite,
      rewrite: (path) => {
        return path.replace(/^\/api/, '');
      },
      changeOrigin: true
    }
  })

  options.server = options.server || {}
  options.server.proxy = devProxyOptions
}

export default addProxyOptions
