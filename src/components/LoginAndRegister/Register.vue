<template>
    <div>注册界面
        <div>
            <mt-field  type="text" placeholder="请输入您的账号"></mt-field>
            <mt-field  type="password" placeholder="密码:不能少于6位"></mt-field>
            <mt-field  type="tel" placeholder="手机号码"></mt-field>
            <mt-button type="primary" class="register">注册</mt-button>
        </div></div>
</template>

<script>
    export default {
        name: "Register",

    }
</script>

<style scoped>
    .register{
        display: block;
        margin: 10px auto;
    }

</style>
