import { reqLogin, reqUserInfo, reqLayOut } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      reqLogin({ username: username.trim(), password: password })
        .then(response => {
          const { token } = response
          commit('SET_TOKEN', token)
          setToken(token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // 用户信息
  getUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      reqUserInfo({ token: state.token })
        .then(response => {
          const { data } = response
          const { roles, name, avatar, introduction } = data
          commit('SET_ROLES', roles)
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          commit('SET_INTRODUCTION', introduction)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      reqLayOut(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
