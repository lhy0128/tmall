import request from '@/utils/request.js'
export function requseLogin (params) {
  // post进去500错误，只能get进去。现在还不知道原因
  return request.get('user', params)
}
export function requseProductInfo () {
  return request.get('productinfo')
}
export function requseProductDetails () {
  return request.get('productdetails')
}
export function register (params) {
  return request.post('user', params)
}
