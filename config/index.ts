import { PROXY_URL_ENUM } from './const'
type EnvType = 'development' | 'alpha' | 'production'
export default function getConfig(viteEnv: any) {
  const SITE_ENV: EnvType = viteEnv.VITE_MODE_ENV || 'development'
  const proxyUrl = PROXY_URL_ENUM[SITE_ENV]
  console.log('proxyUrl', proxyUrl)

  return {
    proxyUrl
  }
}
