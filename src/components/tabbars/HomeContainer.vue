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
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/shopCart">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">我的购物车</div></router-link ></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/collection/collectionList">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">我的收藏</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/new">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">留言反馈</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">我的消息</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/contact">
        <img src="../../images/cart.png" alt="">
        <div class="mui-media-body">个人中心</div></router-link></li>
    </ul>
    <!-- 商品列表区域 -->
    <div class="goods-list">
      <router-link tag="div" :to="'/home/goodsInfo/' + item.id" class="goods-item" v-for="item in goodsList" :key="item.id">
        <img src="../../images/slideshow/lunbo1.jpg" alt="">
        <h1 class="title">{{ item.goodsName }}</h1>
        <div class="info">
          <p class="price">
            <span class="new">￥{{ item.price }}</span>
            <span class="old">￥{{ item.vipPrice }}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{ item.stockNum }}件</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // lunbotu: [] // 轮播图的数组
      page: 1, // 默认展示第一页的数据
      size: 4,
      goodsList: [], // 商品列表
      isloaded: false // 节流阀，默认为false,表示没有加载完毕
    };
  },
  created() {
    // this.getlunbotu();
    this.getGoodsListByPage();

  },
  methods: {
    // async getlunbotu() {
    //   // // 获取轮播图的方法
    //   // const { data } = await this.$http.get("/api/getlunbo");
    //   // if (data.status === 0) this.lunbotu = data.message;
    // }
    async getGoodsListByPage() {
      // 根据页码获取 商品列表
      const { data } = await this.$http.get("/search/" + this.page + "/" + this.size);
      console.log(data)
      if (data.code === 200) {
        if (data.data.list.length <= 0) {
          // 设置isloaded true,表示没有新数据了
          this.isloaded = true;
        }
        this.goodsList = this.goodsList.concat(data.data.list);
      }
    }
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
  .goods-list {
    // 设置父盒子为弹性盒模型
    display: flex;
    // 默认flex 布局的盒子，内部的子元素不会换行，可以使用下面的属性使其换行
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
    padding-top: 0;
    .goods-item {
      width: 49%;
      border: 1px solid #ccc;
      margin-top: 7px;
      box-shadow: 0 0 7px #ccc;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      img {
        width: 100%;
        min-height: 170px;
      }
      .title {
        font-size: 14px;
      }
      .info {
        background-color: #eee;
        overflow: hidden;
        p {
          margin: 3px;
        }
        .price {
          .new {
            color: red;
            font-size: 16px;
            font-weight: bold;
            margin-right: 10px;
          }
          .old {
            text-decoration: line-through;
            font-size: 12px;
          }
        }
        .sell {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }
      }
    }
  }

</style>
