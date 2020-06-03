<template>
    <div class="app-container">
        <!-- 在这里放一个 Header  -->
        <mt-header fixed title="猫咪铺子商城网站">
          <span slot="left">
            <mt-button icon="back">返回</mt-button>
          </span>
        </mt-header>

        <!-- 路由的容器坑 -->
        <router-view></router-view>

        <!-- tabbar区域 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/news">
                <span class="mui-icon mui-icon-chat"><span class="mui-badge">1</span></span>
                <span class="mui-tab-label">消息</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopCart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">1</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/contact">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    // export default {
    //     name: "App"
    // }
</script>

<style lang="scss" >
    /**{*/
    /*    touch-action: none;*/
    /*}*/
    .app-container {
        padding-top: 40px;
    }
</style>
