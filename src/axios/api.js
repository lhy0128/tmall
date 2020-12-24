import request from '@/utils/request.js'
export function requseLogin (params) {
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
