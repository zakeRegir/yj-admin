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
    redirect: '/table/table1',
    meta: { title: '表格', icon: 'table' },
    children: [
      {
        path: 'table1',
        name: 'table1',
        component: () => import('@/pages/table'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'editTable',
        name: 'editTable',
        component: () => import('@/pages/table/EditTable'),
        meta: { title: '编辑表格', icon: 'table' },
        redirect: '/table/editTable/form',
        alwaysShow: true,
        children: [
          {
            path: 'form',
            name: 'form',
            component: () => import('@/pages/form'),
            meta: { title: '表单', icon: 'bug' },
            alwaysShow: true,
            children: [
              {
                path: 'table2',
                name: 'table2',
                component: () => import('@/pages/table'),
                meta: { title: '表格', icon: 'table' },
                alwaysShow: true,
                children: [
                  {
                    path: 'form',
                    name: 'form',
                    component: () => import('@/pages/form'),
                    meta: { title: '表单', icon: 'bug' }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: 'table3',
        name: 'table3',
        component: () => import('@/pages/table'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'table4',
        name: 'table4',
        component: () => import('@/pages/table'),
        meta: { title: '表格', icon: 'table' }
      }
    ]
  }
]

// 创建路由函数
const createRouter = () =>
  new Router({
    routes: constantRoutes
  })

const router = createRouter()

export default router
