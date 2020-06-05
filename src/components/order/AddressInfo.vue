<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <h3 style="font-size: 16px;text-align: center">我的地址</h3>
            <div class="mui-card" >
                <div class="mui-card-content">
                    <div class="adressInfo" v-for="items in address">
                        <h4 style="height: 30px;text-align: center">{{items.detailAddress}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "AddressInfo",
        data() {
            return {
                page: 1,
                size: 4,
                address:[]
            };
        },
        created() {
            this.getAddressInfo();
        },
        methods: {
            async getAddressInfo() {
                // 根据页码获取 商品列表
                const {data} = await this.$http.post("http://localhost:8083/addressInfo/search/" + this.page + "/" + this.size);
                console.log(data)
                if (data.code === 200) {
                    this.address = this.address.concat(data.data.list);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .adressInfo{
        font-size: 16px;
        border: 1px solid #ccc;
    }


</style>
