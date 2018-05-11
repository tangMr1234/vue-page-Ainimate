import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/Login'))
  })
} // 登录
const Home = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Home'))
  })
} // 主页面框架

const Index = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/Index'))
  })
} // 首页
const List = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/List/List'))
  })
} // 列表页
const Detail = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Detail/Detail'))
  })
} // 详情页

const Result = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Result/Result'))
  })
} // 最后结果
const NotFound = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/404'))
  })
} // 错误404

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login,
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '错误界面',
      hidden: true
    },
    {
      path: '*',
      name: '404',
      hidden: true,// 隐藏，在菜单中不显示
      redirect: {path: '/404'}
    },
    {
      path: '/',
      name: '主页面',
      component: Home,
      redirect: {path: '/index'},
      children: [
        {path: '/index', component: Index, name: '冷链管理', icon: 'icon-dangan', meta: {from: []}},
        {path: '/list', component: List, name: '', meta: {from: ['/index']}},
        {path: '/detail', component: Detail, name: '', meta: {from: ['/index', "/list"]}},
        {path: '/result', component: Result, name: '', meta: {from: ['/index', "/list", '/detail']}}
      ]
    }
  ]
})
