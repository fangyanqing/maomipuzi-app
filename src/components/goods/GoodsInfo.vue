<template>
    <div class="goodsInfo-container">
        <!-- 轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item><img src="../../images/slideshow/lunbo1.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../../images/slideshow/lunbo2.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../../images/slideshow/lunbo3.jpg" alt=""></mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsInfo.goodsName }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：
                        <span style="margin-right: 10px;"><del>￥{{ goodsInfo.price }}</del></span>
                        销售价：
                        <span style="font-size: 16px; color: red; font-weight: bold;">￥{{ goodsInfo.vipPrice }}</span>
                    </p>
                    <p>
                        购买数量：
                        <!-- 注意： 这里 的 max 是库存量 -->
                        <!-- 由于 goodsinfo 是通过 Ajax 动态获取回来的，但是，Ajax 是异步请求，需要消耗时间 -->
                        <!-- 因此，可能会导致这样的情况： bobox 组件 先于 Ajax 渲染出来，此时， 组件被渲染的时候， goodsinfo 为 空对象，
                        因此，传递到子组件中的 stockNum 是 undefined；  -->
<!--                        <goodsInfoNoBox :max="goodsInfo.stockNum"></goodsInfoNoBox>-->
                    </p>
                    <div>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsInfo.goodsNo }}</p>
                    <p>库存情况：{{ goodsInfo.stockNum }}件</p>
                    <p>上架时间：{{ goodsInfo.shelvesTime}}</p>
                </div>
            </div>
            <div class="mui-card-footer btnarea">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goCommentList">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    // 导入 数字框组件
    // import goodsInfoNoBox from "../utit/GoodsInfoNoBox.vue";
    export default {
        name: "GoodsInfo",
        data() {
            return {
                goodsInfo: {} // 商品的详情
            };
        },
        created() {
            this.getGoodsInfoById();
        },
        methods: {
            async getGoodsInfoById() {
                // 根据ID获取商品的参数
                const { data } = await this.$http.get("/findById/" +this.id);
                console.log(data)
                if (data.code === 200) return (this.goodsInfo = data.data);
            },
            goCommentList(){
                //跳转到评论页面
                this.$router.push("/comment/commentList/"+this.id)
            }
        },
        props: ["id"],
        components: {
            // 注册子组件
            // goodsInfoNoBox
        }
    }
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
    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;

        /*.btnarea {*/
        /*    flex-direction: column;*/
        /*    button + button {*/
        /*        margin-top: 15px;*/
        /*    }*/
        /*}*/
    }
</style>
