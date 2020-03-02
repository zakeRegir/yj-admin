import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

// 定义无须权限的路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/pages/login')
  },
  {
    path: '/404',
    component: () => import('@/pages/404')
  },
  {
    path: '/',
    component: Layout
  }
]

export const asyncRoutes = [
  {
    path: '/home',
    component: () => import('@/pages/home')
  }
]

// 创建路由函数
const createRouter = () =>
  new Router({
    routes: constantRoutes
  })

const router = createRouter()

export default router
