<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner goods-item">
    <!--                            &lt;!&ndash; 开关 &ndash;&gt;-->
                                <mt-switch ></mt-switch>
<!--                        <div id="ck1" name="product" class="mini-checkbox" checked="true" text="MiniUI CheckBox" ></div>-->
                        <!-- 图片 -->
                        <img src="../../images/slideshow/lunbo1.jpg" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>布偶猫白色</h1>
                            <div class="goods-info">
                                <span class="price">￥3000</span>
                                <!-- countObj[item.id] 表示这条商品对应的数量 -->
<!--                                <nobox :initcount="countObj[item.id]" :id="item.id"></nobox>-->
                                <a href="#" style="
                    margin-left: 55px;" @click.prevent="deleted">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 结算区域 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>
                                已勾选商品<span class="danger">0</span>件，总价<span class="danger">￥0</span>
                            </p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>

<!--            {{ JSON.stringify(seletedObj) }}-->

        </div>
    </div>
</template>

<script>
    export default {
        name: "CartList",
        data() {
            return {
                goodsList: [] // 商品列表
            };
        },
        created() {
        },
        methods: {
            deleted(id) {
                // 删除商品
                // console.log(id);
                // 从界面上删除数据
                this.goodsList.some((item, i) => {
                    if (item.id == id) {
                        this.goodsList.splice(i, 1);
                        return true;
                    }
                });
                // 从 vuex 中删除数据
                // this.delFromCart(id);
            },
        },
    }
</script>

<style lang="scss" scoped>
    .shopcar-container {
        background-color: #eee;
        overflow: hidden;

        .goods-item {
            display: flex;
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
