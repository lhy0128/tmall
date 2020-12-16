const user = require('../src/api/user')
module.exports = {
  devServer: {
    port: 8081,
    open: true,
    before: app => {
      app.get('/api/user',(req, res) =>{
        res.json(user)
      })
    }
  }
}