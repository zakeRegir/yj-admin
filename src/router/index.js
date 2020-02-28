import Vue from 'vue'
import Router from 'vue-router'
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
  }
]

// 创建路由函数
const createRouter = () =>
  new Router({
    routes: commonRoutes
  })

const router = createRouter()

export default router
