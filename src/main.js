// 项目的JS打包入口文件
// 导入Vue
import Vue from 'vue'
// 导入 根组件
import App from './components/App.vue'
const vm = new Vue({
  el: '#app',
  render: c => c(App)
})
