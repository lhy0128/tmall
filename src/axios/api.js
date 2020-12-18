import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8081'

export const requseLogin = params => {
  return axios.post('/login', params)
}
