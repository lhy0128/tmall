import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const requseLogin = params => {
  return axios.post('/users', params)
}
