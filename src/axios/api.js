import request from '@/utils/request.js'
export function requseLogin (params) {
  // post进去500错误，只能get进去。现在还不知道原因
  return request.get('', params)
}
