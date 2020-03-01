import Vue from 'vue'
// 样式重置
import 'normalize.css/normalize.css'

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局样式
import '@/styles/index.less'

import store from './store'
import router from './router'

// 全局组件
import globalComponents from '@/utils/globalComponents.js'

import App from './App.vue'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(globalComponents)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
