// 项目的JS打包入口文件
// 导入Vue
import Vue from 'vue'
// 导入 根组件
import App from './components/App.vue'


// 全局配置MintUI组件库
import MintUI from 'mint-ui'
// 导入 Mint-UI的样式表
import 'mint-ui/lib/style.css'
// 使用 Vue.use 来批量注册 MintUI 的组件
Vue.use(MintUI)

// 导入 MUI 的样式表
import '../lib/mui/css/mui.min.css'
// 导入MUI的扩展图标
import '../lib/mui/css/icons-extra.css'

// // 配置 axios
// import axios from 'axios'
// // 把 axios 挂载到 Vue的 原型对象上
// Vue.prototype.$http = axios.create({
//   baseURL: 'http://localhost:8082/goods/api' // 在全局设置 axios 的请求根路径，这样，在发起请求的时候，就可以不写 根地址了
// })

// 配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入路由对象
import router from './router.js'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router // 挂载路由)
})
