<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner goods-item">
                        <img src="../../images/slideshow/lunbo1.jpg" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>布偶猫白色</h1>
                            <div class="goods-info">
                                <span class="price" style="margin-right: 3px">￥3000</span>
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
        methods: {
            toPay(){
                this.$router.push("/payment")
            }
        }
    }
</script>


<style lang="scss" scoped>
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
