// 通过axios-mock-adapter生成代理api地址
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {users} from './data/user'

export default {
  init () {
    let mock = new MockAdapter(axios)
    mock.onGet('/success').reply(200, {
      msg: 'success'
    })
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })
    // 依旧是post方法不行
    mock.onPost('/login').reply(config => {
      let { username, password } = JSON.parse(config.data)
      // console.log(username, password)// 结果显示undefined
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          // 判断模拟的假数据中是否有和传过来的数据匹配的
          let hasUser = users.some(person => {
            // console.log(username, person.username)
            if (person.username === username && person.password === password) {
              user = JSON.parse(JSON.stringify(person))
              user.password = undefined
              return true
            } else {
              return false
            }
          })
          if (hasUser) {
            resolve([ 200, {status: 200, msg: '登录成功', user} ])
          } else {
            resolve([200, { status: 500, msg: '账号错误' }])
          }
        }, 500)
      })
    })
  // 模拟注册接口
  }
}
