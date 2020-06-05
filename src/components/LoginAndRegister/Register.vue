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
        data(){
            return{
                realName: "",
                password: "",
                phone:"",
            }
        },
        methods: {
            async login() {
                // 根据页码获取 商品列表
                const {data} = await this.$http.post("http://localhost:8083/user/add", {
                    realName: this.realName,
                    password: this.password,
                    phone:this.phone
                });

                console.log(data)
                if (data.code === 200) {
                    this.$router.push("/login")
                }else{
                    alert("注册失败，请重新填写信息注册！")
                }
            },
        }
    }
</script>

<style scoped>
    .register{
        display: block;
        margin: 10px auto;
    }

</style>
