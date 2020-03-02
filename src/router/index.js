import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

// 定义无须权限的路由
export const commonRoutes = [
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

// 创建路由函数
const createRouter = () =>
  new Router({
    routes: commonRoutes
  })

const router = createRouter()

export default router
