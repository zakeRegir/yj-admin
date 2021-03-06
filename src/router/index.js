import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)
// 定义无须权限的路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/redirect')
      }
    ]
  },
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
        meta: { title: 'home', icon: 'home' }
      }
    ]
  }
]

// 需要权限的路由
export const asyncRoutes = [
  {
    path: '/table',
    name: 'table',
    component: Layout,
    redirect: '/table/commonTable',
    meta: { title: '表格', icon: 'table' },
    children: [
      {
        path: 'commonTable',
        name: 'commonTable',
        component: () => import('@/pages/table/commonTable.vue'),
        meta: { title: '普通表格' }
      },
      {
        path: 'editTable',
        name: 'editTable',
        component: () => import('@/pages/table/EditTable.vue'),
        meta: { title: '编辑表格' }
      }
    ]
  }
]

// 创建路由函数
const createRouter = () =>
  new Router({
    // 到顶部, 路由跳转后
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
const router = createRouter()

export default router
