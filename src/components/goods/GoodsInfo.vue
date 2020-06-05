<template>
    <div class="goodsInfo-container">

        <!-- 要实现动画的小球 -->
        <!-- 注意：钩子函数动画，这些钩子函数，都是通过事件绑定机制，绑定到 transition 元素上的 -->
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
            <div class="ball" v-show="flag"></div>
        </transition>

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
                        <goodsInfoNoBox :max="goodsInfo.stockNum" @func="getSelectedCount"></goodsInfoNoBox>
                    </p>
                    <div>
                        <mt-button type="primary" size="small" @click="addToOrder">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
                        <mt-button type="default" size="small" @click="addToCollect">收藏</mt-button>
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
    import goodsInfoNoBox from "../utit/GoodsInfoNoBox.vue";
    import { mapMutations } from "vuex";
    import moment from "moment";
    export default {
        name: "GoodsInfo",
        data() {
            return {
                goodsInfo: {},// 商品的详情
                flag: false, //小球的显示与隐藏状态
                selectedCount: 1 // 用户选择的商品购买数量， 默认选中了一个商品
            };
        },
        created() {
            this.getGoodsInfoById();
        },
        methods: {
            ...mapMutations(["addToCar"]),
            async getGoodsInfoById() {
                // 根据ID获取商品的参数
                const { data } = await this.$http.get("/findById/" +this.id);
                console.log(data)
                if (data.code === 200) return (this.goodsInfo = data.data);
            },
            goCommentList(){
                //跳转到评论页面
                this.$router.push("/comment/commentList/"+this.id)
            },
            beforeEnter(el) {
                // 入场动画开始之前，设置小球的起始状态
                el.style.transform = "translate(0, 0)";
            },
            enter(el, done) {
                // 入场动画结束之后，小球的终止状态
                el.offsetWidth;
                // 设置小球的入场动画终止状态
                // el.style.transform="translate(87px, 390px)";
                // el.style.transition="all 1s ease";
                //
                // 动态获取小球的横纵坐标
                const ballPos = el.getBoundingClientRect();
                // 动态获取徽标的横纵坐标【注意：这里获取徽标的位置，和双向数据绑定没有任何关系，所以，可以直接使用普通的DOM操作】
                // DOM操作的优势：不论要操作的元素属于哪个组件，只要这个元素属于document，那么就能够直接获取到
                const badgePos = document.getElementById("badge").getBoundingClientRect();
                const left = badgePos.left - ballPos.left;
                const top = badgePos.top - ballPos.top;

                // 动态设置 top 和 left 值
                el.style.transform = "translate(" + left + "px, " + top + "px)";
                // 设置小球的过渡效果
                // 贝塞尔曲线在线生成器： http://cubic-bezier.com/#.46,-0.4,1,.49
                el.style.transition = "all .5s cubic-bezier(.46,-0.4,1,.49)";
                // 当入场动画完成之后，需要手动调用一下 done 回调函数，直接跳过小球的出场动画
                done();
            },
            afterEnter(el) {
                // 入场动画完成之后的回调函数
                this.flag = !this.flag;
            },
            addToCart(){
                //添加到购物车
                this.flag =!this.flag
                // 调用 mutations 中的 addToCar
                // 直接调用 mapMutaions 中映射出来的方法
                this.addToCar({
                    id: this.id,
                    quantity: this.selectedCount,
                });
                const {data} =this.$http.post("http://localhost:8086/cartInfo/add",{
                    id: this.id,
                    cartId: '1',
                    goodsNo: 'fyq202001160001' ,
                    price: '3500',
                    image: '/src/images/slideshow/maomi.jpg',
                    quantity: this.selectedCount,
                });
                if (data.code === 200) {
                   alert("添加成功")
                    this.$router.push("/shoppingCart/cartList")
                }
            },
            getSelectedCount(c){
                //获取商品的数量
                // 把 用户选择的最新的数量值，保存到 data 中，方便用户点击加入购物车按钮时候，把数量值同步到 徽标中
                this.selectedCount = c;
            },
            addToCollect(){
                this.$router.push("/collection/collectionList")
            },
            addToOrder(){
                this.$router.push("/order/orderList")
            }
        },
        props: ["id"],
        components: {
            // 注册子组件
            goodsInfoNoBox
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
    .ball {
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        // 让小球脱离标准流
        position: absolute;
        z-index: 99;
        left: 152px;
        top: 370px;
        // 将来小球要通过动画位移到的位置
         /*transform: translate(87px, 390px);*/
    }

</style>
