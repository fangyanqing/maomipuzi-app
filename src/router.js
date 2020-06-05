import VueRouter from 'vue-router'

// 导入路由组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import NewsContainer from './components/tabbars/NewsContainer.vue'
import ShopCartContainer from './components/tabbars/ShopCartContainer.vue'
import ContactContainer from './components/tabbars/ContactContainer.vue'

import GoodsList from "./components/goods/GoodsList.vue";
import GoodsInfo from "./components/goods/GoodsInfo.vue";
import Login from "./components/LoginAndRegister/Login.vue";
import CartList from "./components/shoppingCart/CartList.vue";
import CollectionList from "./components/collection/CollectionList.vue";
import CommentList from "./components/comment/CommentList.vue";
import OrderList from "./components/order/OrderList.vue";
import Register from "./components/LoginAndRegister/Register.vue";
import Payment from "./components/order/Payment.vue";

// 创建路由对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/news', component: NewsContainer },
    { path: '/shopCart', component: ShopCartContainer },
    { path: '/contact', component: ContactContainer },
    { path: '/home/goodsList', component: GoodsList },
    { path: '/home/goodsInfo/:id', component: GoodsInfo , props: true},
    { path: '/login', component: Login },
    { path: '/shoppingCart/cartList', component: CartList },
    { path: '/collection/collectionList', component: CollectionList },
    { path: '/comment/commentList/:id', component: CommentList, props: true },
    { path: '/order/orderList', component: OrderList },
    { path: '/register', component: Register },
    { path: '/payment', component: Payment },
  ],
  linkActiveClass: 'mui-active' // 手动设置 被激活的 路由链接的高亮类名
})

export default router
