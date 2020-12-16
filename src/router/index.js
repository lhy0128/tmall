import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/topPart/Login'
import Register from '../view/topPart/Register'
import ShoppingCar from '../view/topPart/ShoppingCar'
import User from '../api/user'
const Home = () => import('../components/HelloWorld')

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: 'HelloWorld'
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: { title: '登录' }
    },
    { path: '/shoppingcar',
      component: ShoppingCar,
      name: 'shoppingcar',
      meta: { title: '购物车' }
    },
    { path: '/register',
      component: Register,
      name: 'register',
      meta: { title: '注册' }
    },
    { path: '/user',
      component: User,
      name: 'user',
      meta: { title: '用户' }
    }
  ],
  mode: 'history',
  // 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
  linkActiveClass: 'active'
})
export default router
