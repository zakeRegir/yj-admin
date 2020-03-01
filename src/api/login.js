import httpServer from '@/utils/request'

// 登录
export const reqLogin = params => {
  return httpServer(
    {
      url: '/login',
      method: 'post'
    },
    params
  )
}
