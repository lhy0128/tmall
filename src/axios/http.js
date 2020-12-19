// 配置axios
import axios from 'axios'
// 引入qs
import qs from 'qs'

const { baseURL, token } = conf;
// 创建实例
const instance = axios.create({
  baseURL: baseURL,
  headers: { 
    "Authorization": sessionStorage.getItem(token)
  }
})
// 请求拦截器
instance.interceptors.request.use(config => {
  if (config.method == 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => { 
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.use(response => {
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
