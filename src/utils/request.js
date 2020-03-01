import axios from 'axios'
import router from '../router'
// import store from '../store'
import { Notification } from 'element-ui'
import { baseApi } from '../../config'

// 弹窗
const message = msg => {
  Notification({
    title: '提示信息',
    message: msg,
    type: 'error',
    duration: 3000
  })
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

// 统一失败的错误处理
const errorHandleMap = [
  [
    401,
    () => {
      toLogin()
      message('用户没有权限（令牌、用户名、密码错误）')
    }
  ],
  [
    404,
    () => {
      router.replace({ path: '/404' })
      message('请求的资源不存在')
    }
  ],
  [
    500,
    () => {
      router.replace({ path: '/500' })
      message('服务器发生了错误')
    }
  ]
]
const errorHandle = status => {
  [...errorHandleMap].forEach(([key, fun]) => {
    key === status ? fun.call() : ''
  })
}

// 创建实例
// const request = axios.create({
//   baseURL: baseApi, // url = baseApi + request url
//   withCredentials: true, // 当跨域请求时发送cookie
//   timeout: 5000 // 请求超时时间
// })

const httpServer = (opts, data) => {
  // 设置请求的配置
  const httpOptions = {
    method: opts.method.toLowerCase(),
    url: opts.url,
    timeout: 5000,
    baseURL: baseApi,
    withCredentials: true
  }

  // 区分post或者get
  if (httpOptions.method === 'get' || httpOptions.method === 'delete') {
    httpOptions.params = data
  } else {
    httpOptions.data = data
  }
  return axios(httpOptions)
}
// 请求拦截
axios.interceptors.request.use(
  config => {
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status)
    } else {
      // 断网
    }
    return Promise.reject(error)
  }
)
export default httpServer
