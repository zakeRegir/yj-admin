import drag from './drag'

const install = function(Vue) {
  Vue.directive('el-drag-dialog', drag)
}

if (window.Vue) {
  window['el-drag-dialog'] = drag
  Vue.use(install); // eslint-disable-line
}
// 给插件定义指令(即可以当指令,又可以当插件)  https://cn.vuejs.org/v2/guide/plugins.html
drag.install = install
export default drag
