import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/login']
// 路由拦截
router.beforeEach(async (to, from, next) => {
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      console.log(store.getters.roles)
      if (hasRoles) {
        next()
      } else {
        try {
          console.log(121212)
          const { roles } = await store.dispatch('user/getUserInfo')
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          router.addRoutes(accessRoutes)
          console.log(to)
          next({ ...to, replace: true })
        } catch (err) {
          console.log(err)
          await store.dispatch('user/resetToken')
          Message.error(err || 'Has Error')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    whiteList.indexOf(to.path) !== -1 ? next() : next(`/login?redirect=${to.path}`)
  }
})
