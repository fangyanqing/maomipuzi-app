<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="adressInfo" style="margin-top: 10px" v-for="item in userInfo"><p>{{item.realName}}<span style="margin-left: 10px">{{item.phone}}</span></p></div>
                    <div class="adressInfo" v-for="items in address">{{items.detailAddress}}</div>
                    <div class="adressInfo" style="color: #cf2d28;" @click="toAddress">更多</div>
                </div>
            </div>

            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner goods-item" v-for="item in orderList">
                        <img src="../../images/slideshow/lunbo1.jpg" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>布偶猫白色</h1>
                            <div class="goods-info">
                                <span class="price" style="margin-right: 3px">￥{{item.payPrice}}</span>
                                <span style="margin-left: 10px">{{item.payStatus ==0?"未支付":(item.payStatus ==1?"已付款":"付款失败")}}</span>
                                <span style="margin-left: 10px">{{item. orderInfoStatus ==0?"订单正常":"退款中"}}</span>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <!-- 结算区域 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner jiesuan">
                        <mt-button type="danger" @click="toPay">去结算</mt-button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderList",
        data() {
            return {
                page: 1, // 默认展示第一页的数据
                size: 4,
                pageNum:1,
                pageSize:1,
                orderList: [],
                userInfo: [],
                address:[]
            };
        },
        created() {
            this.getOrderListByPage();
            this.getUserInfo();
            this.getAddressInfo();
        },
        methods: {
            async getOrderListByPage() {
                // 根据页码获取 商品列表
                const {data} = await this.$http.post("http://localhost:8085/orderInfo/search/" + this.page + "/" + this.size);
                console.log(data)
                if (data.code === 200) {
                    this.orderList = this.orderList.concat(data.data.list);
                }
            },
            async getUserInfo() {
                const {data} = await this.$http.post("http://localhost:8083/user/search/" + this.pageNum + "/" + this.pageSize);
                console.log(data)
                if (data.code === 200) {
                    this.userInfo = this.userInfo.concat(data.data.list);
                }
            },
            async getAddressInfo() {
                const {data} = await this.$http.post("http://localhost:8083/addressInfo/search/" + this.pageNum + "/" + this.pageSize);
                console.log(data)
                if (data.code === 200) {
                    this.address = this.address.concat(data.data.list);
                }
            },
            toPay(){
                this.$router.push("/payment")
            },
            toAddress(){
                this.$router.push("/addressInfo")
            }
        }
    }
</script>


<style lang="scss" scoped>
    .adressInfo{
        margin-left: 5px;
    }
    .allSelect{
        height: 30px;
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

    .danger {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }

    .jiesuan {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
