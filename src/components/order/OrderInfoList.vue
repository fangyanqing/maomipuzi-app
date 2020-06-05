<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner goods-item" v-for="item in orderList">
                        <!-- 图片 -->
                        <img src="../../images/slideshow/lunbo1.jpg" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>{{ item.goodsNo}}</h1>
                            <div class="goods-info">
                                <span style="margin-right: 10px">总数：{{item.totalNum}}</span>
                                <span class="price">￥{{ item.totalPrice }}</span>
                                <a href="#" style="
                    margin-left: 30px;" >取消订单</a>
                            </div>
                            <div><span style="margin-right: 30px">{{item.payStatus ==0?"未支付":(item.payStatus ==1?"已付款":"付款失败")}}</span>
                                <span >{{item.orderInfoStatus==0?"订单正常":"退款中"}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderInfoList",
        data() {
            return {
                page: 1, // 默认展示第一页的数据
                size: 4,
                orderList: [],
            };
        },
        created() {
            this.getGoodsListByPage();
        },
        methods: {
            async getGoodsListByPage() {
                // 根据页码获取 商品列表
                const {data} = await this.$http.get("http://localhost:8085/orderInfo/findByUserId/1");
                console.log(data)
                if (data.code === 200) {
                    this.orderList = this.orderList.concat(data.data);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
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
