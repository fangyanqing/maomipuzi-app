import VueRouter from 'vue-router'

// 导入路由组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import NewsContainer from './components/tabbars/NewsContainer.vue'
import ShopCartContainer from './components/tabbars/ShopCartContainer.vue'
import ContactContainer from './components/tabbars/ContactContainer.vue'

import GoodsList from "./components/goods/GoodsList.vue";

// 创建路由对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/news', component: NewsContainer },
    { path: '/shopCart', component: ShopCartContainer },
    { path: '/contact', component: ContactContainer },
    { path: '/home/goodsList', component: GoodsList },
  ],
  linkActiveClass: 'mui-active' // 手动设置 被激活的 路由链接的高亮类名
})

export default router
