<template>
  <div>
<!--    &lt;!&ndash; 轮播图区域 &ndash;&gt;-->
<!--    <mt-swipe :auto="4000">-->
<!--      <mt-swipe-item v-for="(item, i) in lunbotu" :key="i">-->
<!--        <img :src="item.img" alt="">-->
<!--      </mt-swipe-item>-->
<!--    </mt-swipe>-->
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../images/slideshow/lunbo1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/slideshow/lunbo2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/slideshow/lunbo3.jpg" alt=""></mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格布局 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src="../../images/cart.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/cartList">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">我的购物车</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">我的收藏</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">我的消息</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">个人中心</div></a></li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // lunbotu: [] // 轮播图的数组
    };
  },
  // created() {
  //   this.getlunbotu();
  // },
  methods: {
    // async getlunbotu() {
    //   // // 获取轮播图的方法
    //   // const { data } = await this.$http.get("/api/getlunbo");
    //   // if (data.status === 0) this.lunbotu = data.message;
    // }
  }
};
</script>

<style lang="scss" scoped>
  /*轮播图*/
  .mint-swipe {
    height: 180px;

    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: pink;
      }
      &:nth-child(3) {
        background-color: hotpink;
      }
    }
  }
  /*九宫格*/
  .mui-grid-view {
    li {
      img {
        width: 60px;
        height: 60px;
      }
      div {
        font-size: 12px;
      }
    }
  }

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
  }

  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 13px;
  }

</style>
