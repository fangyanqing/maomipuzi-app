<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner goods-item">
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
                    margin-left: 55px;" >取消收藏</a>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card-content-inner goods-item">
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
                    margin-left: 55px;" >取消收藏</a>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card-content-inner goods-item">
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
                    margin-left: 55px;" >取消收藏</a>
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
        name: "CollectionList"
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
</style>
