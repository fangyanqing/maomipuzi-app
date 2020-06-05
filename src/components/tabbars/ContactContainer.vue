<template>
  <div>
    <div class="avatar_box">
      <img src="../../images/cat.png" alt="">
    </div>
    <div class="shopcar-container">
      <div class="goods-list">
        <div class="mui-card">
          <div class="mui-card-content">
            <div class="allSelect">
              <mt-button type="primary" size="large" style="margin-top: 10px;"@click="toLogin">登录</mt-button>
              <mt-button type="primary" size="large" style="margin-top: 10px;" @click="toRegister">注册</mt-button>
              <mt-button type="primary" size="large" style="margin-top: 10px;" @click="toMyCart">我的购物车</mt-button>
              <mt-button type="primary" size="large" style="margin-top: 10px;" @click="toMyOrderList">我的订单</mt-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toLogin(){
      this.$router.push("/login")
    },
    toRegister(){
      this.$router.push("/register")
    },
    toMyCart(){
      this.$router.push("/shoppingCart/cartList")
    },
    toMyOrderList(){
      this.$router.push("/order/orderInfoList")
    }
  }
};
</script>

<style lang="scss" scoped>
  .avatar_box{
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    background-color: #fff;
  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
  .shopcar-container {
    background-color: #eee;
    overflow: hidden;

    .goods-item {
      display: flex;
      border: 1px solid #ccc;
      img {
        margin-left: 5px;
        width: 60px;
        height: 60px;
      }
      h1 {
        margin-left: 5px;
        font-size: 13px;
      }
      .info {
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .goods-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .price {
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
    }
  }

</style>
