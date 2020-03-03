import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

// 定义无须权限的路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/pages/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/pages/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/pages/home'),
        name: 'home',
        meta: { title: 'home', icon: 'el-icon-s-home' }
      }
    ]
  }
]

// 需要权限的路由
export const asyncRoutes = [
  {
    path: '/table',
    name: 'table',
    component: () => import('@/pages/table')
  }
]

// 创建路由函数
const createRouter = () =>
  new Router({
    routes: constantRoutes
  })

const router = createRouter()

export default router
