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

// 用户信息
export const reqUserInfo = params => {
  return httpServer(
    {
      url: '/userinfo',
      method: 'get'
    },
    params
  )
}

// 退出登录
export const reqLayOut = params => {
  return httpServer(
    {
      url: '/layout',
      method: 'post'
    },
    params
  )
}
