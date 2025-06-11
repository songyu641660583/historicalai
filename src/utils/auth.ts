import Cookies from 'js-cookie'
const TokenKey = 'LOGIN_TOKEN'

export function getToken(): string {
  return Cookies.get(TokenKey) || ''
}

export function setToken(token: string) {
 Cookies.set(TokenKey, token)
}

export function removeToken() {
 Cookies.remove(TokenKey)
}
