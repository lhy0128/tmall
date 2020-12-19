// 配置axios
import axios from 'axios'
import qs from 'qs'
import conf from './config.js'
const { baseURL, token } = conf
// 创建实例
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': sessionStorage.getItem(token)
  }
})
// 请求拦截器
instance.interceptors.request.use(config => {
  // 加了一个get,暂时没啥变化。还不了解。做完再看看
  if (config.method === 'post' || config.method === 'get') {
    config.data = qs.stringify(config.data)
    // console.log(config.username)
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.use(response => {
  // console.log(response)
  return {
    ...response,
    data: response.data.data,
    status: response.data.status,
    statusText: response.data.message
  }
}, error => {
  return Promise.reject(error)
})
export default instance
