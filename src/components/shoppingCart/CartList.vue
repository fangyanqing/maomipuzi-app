<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="allSelect">
                        <label class="mint-checklist-label " style="margin-top: 5px">
                            <span class="mint-checkbox" >
                                <input type="checkbox" class="mint-checkbox-input">
                                <span class="mint-checkbox-core"></span>
                            </span>
                            <span class="mint-checkbox-label">全选</span>
                        </label>
                    </div>
                    <div class="mui-card-content-inner goods-item" v-for="item in goodsList">
                        <label class="mint-checklist-label" style="margin-left:-15px">
                            <span class="mint-checkbox">
                                <input type="checkbox" class="mint-checkbox-input" >
                                <span class="mint-checkbox-core"></span>
                            </span>
                        </label>
<!--                        <div id="ck1" name="product" class="mini-checkbox" checked="true" text="MiniUI CheckBox" ></div>-->
                        <!-- 图片 -->
                        <img :src="item.image" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>{{ item.goodsName }}</h1>
                            <div class="goods-info">
                                <span class="price" style="margin-right: 3px">￥{{item.quantity}}</span>
                                <!-- countObj[item.id] 表示这条商品对应的数量 -->
                                <cartNoBox></cartNoBox>
                                <a href="#" style="margin-left: 3px" @click.prevent="deleted(item.cartId)">删除</a>
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
                        <mt-button type="danger"  @click="toPay">去结算</mt-button>
                    </div>
                </div>
            </div>

<!--            {{ JSON.stringify(seletedObj) }}-->

        </div>
    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    import cartNoBox from "../utit/CartNoBox.vue";
    export default {
        name: "CartList",
        data() {
            return {
                page: 1, // 默认展示第一页的数据
                size: 4,
                goodsList: [],
                // isloaded: false // 节流阀，默认为false,表示没有加载完毕
            };
        },
        created() {
            this.getCartListByPage();
        },
        methods: {
            async getCartListByPage() {
                // 根据页码获取 商品列表
                const {data} = await this.$http.get("http://localhost:8086/cartInfo/search/" + this.page + "/" + this.size);
                console.log(data)
                if (data.code === 200) {
                    this.goodsList = this.goodsList.concat(data.data.list);
                }
            },
            deleted(id) {
                console.log(id)
                MessageBox.confirm('',{
                    title:'提示',
                    message:'是否删除',
                    confirmButtonText:'确定',
                    cancelButtonText:'取消'
                }).then(()=> {
                    const {data} = this.$http.delete("http://localhost:8086/cartInfo/deleted/" + id);
                    if (data.code === 200) {
                        MessageBox('提示', '取消成功')
                        this.getCartListByPage();
                    } else {
                        MessageBox('提示','取消收藏失败')
                        this.getCartListByPage();
                    }
                }).catch(error=>{
                    if(error=='cancel'){
                        MessageBox('提示','点击取消')
                    }
                })

            },
            toPay(){
                this.$router.push("/payment")
            }
        },
        components: {
            // 注册子组件
            cartNoBox
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
