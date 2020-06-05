<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner goods-item" v-for="item in collectionList" :key="item.id">
                        <!-- 图片 -->
                        <img src="../../images/slideshow/lunbo1.jpg" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>{{ item.goodsName }}</h1>
                            <div class="goods-info">
                                <span class="price">￥{{ item.price }}</span>
                                <span href="#" style="
                    margin-left: 55px;color:deepskyblue" @click="deleted(item.collectId)" >取消收藏</span>
                            </div>
                            <div><span>收藏时间：{{ item.collectTime}}</span></div>
                        </div>
                    </div>
                    <mt-button type="danger" size="large" style="margin-top: 10px;" @click="getMore">加载更多</mt-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    export default {
        name: "CollectionList",
        data() {
            return {
                page: 1, // 默认展示第一页的数据
                size: 4,
                collectionList: [],
                isloaded: false // 节流阀，默认为false,表示没有加载完毕
            };
        },
        created() {
            this.getGoodsListByPage();
        },
        methods: {
            async getGoodsListByPage() {
                // 根据页码获取 商品列表
                const {data} = await this.$http.get("http://localhost:8083/collect/search/" + this.page + "/" + this.size);
                console.log(data)
                if (data.code === 200) {
                    if (data.data.list.length <= 0) {
                        // 设置isloaded true,表示没有新数据了
                        this.isloaded = true;
                    }
                    this.collectionList = this.collectionList.concat(data.data.list);
                }
            },
            deleted(id) {
                console.log(id)
                MessageBox.confirm('',{
                    title:'提示',
                    message:'是否取消收藏',
                    confirmButtonText:'确定',
                    cancelButtonText:'取消'
                }).then(()=> {
                    const {data} = this.$http.delete("http://localhost:8083/collect/deleted/" + id);
                    if (data.code === 200) {
                        MessageBox('提示', '取消成功')
                        this.getGoodsListByPage();
                    } else {
                        MessageBox('提示','取消收藏失败')
                        this.getGoodsListByPage();
                    }
                }).catch(error=>{
                    if(error=='cancel'){
                        MessageBox('提示','点击取消')
                    }
                })

            },
            getMore() {
                // 如果为true，表示数据已经加载完毕了，此时直接return
                if (this.isloaded) return;
                // 点击加载更多的商品
                this.page++;
                this.getGoodsListByPage();
            }
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
