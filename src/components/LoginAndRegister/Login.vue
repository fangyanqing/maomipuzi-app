<template>
    <div>
        <div class="avatar_box">
            <img src="../../images/slideshow/lunbo1.jpg" alt="">
        </div>
        <div>
            <mt-field type="text" placeholder="请输入您的账号" v-model="realName" ></mt-field>
            <mt-field  type="password" placeholder="密码:不能少于6位" v-model="password" ></mt-field>
            <mt-button type="primary" class="login" @click="login">登录</mt-button>
           <div class="regist"> <router-link to="/register">没有账号？请注册！</router-link></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                realName: "",
                password: ""
            }
        },
        methods: {
            async login() {
                // 根据页码获取 商品列表
                const {data} = await this.$http.post("http://localhost:8083/user/login", {
                    realName: this.realName,
                    password: this.password
                });

                console.log(data)
                if (data.code === 200) {
                    this.$router.push("/home")
                }else{
                    alert("用户名或密码错误！请重新输入！")
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .avatar_box{
        width: 100px;
        height: 100px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        margin: 0 auto;
        box-shadow: 0 0 10px #ddd;
        background-color: #fff;
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
    .login{
        display: block;
        margin: 10px auto;
    }
    .regist{
        font-size: 12px;
        text-align: center;
    }
</style>
