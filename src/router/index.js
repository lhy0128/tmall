import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/topPart/Login'
import Register from '../view/topPart/Register'
import ShoppingCar from '../view/topPart/ShoppingCar'
import Details from './'

import store from '../store/index'
const Home = () => import('../view/topPart/HomePage')
// 懒加载方式，当路由被访问的时候才加载对应组件
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: { title: '首页' }
      // meta设置页面头部标题，方便告诉用户当前显示的是哪一个页面
    },
    {
      path: '/home',
      component: Home,
      name: 'home',
      meta: { title: '首页' }
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
      meta: {
        title: '购物车',
        requireAuth: true
      }
    },
    { path: '/register',
      component: Register,
      name: 'register',
      meta: { title: '注册' }
    },
    { path: '/details',
      component: Details,
      name: 'details',
      meta: { title: '详情页' }
    }
  ],
  mode: 'history',
  // 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router
