<template>
    <div>

        <h4>发表评论 --- {{ id }}</h4>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多评论120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postMsg">发表评论</mt-button>


        <!-- 评论列表区域 -->
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in cmtlist" :key="i">
                <div class="cmt-item-title">第{{ i+1 }}楼&nbsp;用户：{{ item.userId }}&nbsp;发表时间：{{ item.commentTime | dateFormat }}</div>
                <div class="cmt-item-body">{{ item.content }}</div>
            </div>
        </div>


<!--        <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>-->

    </div>
</template>

<script>
    // 按需从 MintUI 中，导出需要的 弹框组件
    import { Toast } from "mint-ui";
    import moment from "moment";
    import GoodsInfo from "../goods/GoodsInfo";
    export default {
        name: "Comment",
        data() {
            return {
                page: 1, // 默认展示第一页的评论
                cmtlist: [], // 评论数组
                msg: "" // 即将发表的评论内容
            };
        },
        created() {
            this.getCommentByPage();
        },
        methods: {
            async getCommentByPage() {
                // 根据页数来获取评论的数据
                const { data } = await this.$http.post("http://localhost:8089/comment/findBySkuId/" +this.id);
                if (data.code === 200)
                    return (this.cmtlist = this.cmtlist.concat(data.data));
            },
            // loadMore() {
            //     // 点击按钮，加载更多的评论
            //     // 当触发这个加载更多方法的时候，应该让 page 页码 + 1 之后，再调用 getCommentByPage 方法
            //     this.page++;
            //     this.getCommentByPage();
            // },
            async postMsg() {
                // 点击发表评论：
                // 如果用户没有填写评论内容，则阻止其发表评论
                if (this.msg.trim().length <= 0) return Toast("请填写评论内容！");
                // 发表评论的逻辑：
                const { data } = await this.$http.post(
                    "http://localhost:8089/comment/add",
                    {
                        content: this.msg.trim(),
                        skuId: this.id,
                        commentTime:  moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                    }
                );
                if (data.code === 200) {
                    // 刷新评论列表
                    // 1. 再次调用 getCommentByPage()
                    // console.log("ok");
                    // // 获取评论之前，先把之前所有的评论清空
                    // this.cmtlist = [];
                    // this.getCommentByPage();

                    // 为了防止重新调用 getCommentByPage 方式时候，会把 之前的所有评论清空的问题：
                    // 我们 在客户端，手动拼接出一个 评论的对象，并把 这个评论对象， unshift 到 cmtlist 中
                    this.cmtlist.unshift({
                        userName: "匿名用户",
                        commentTime: new Date(),
                        content: this.msg.trim()
                    });
                    this.msg = "";
                }
            }
        },
        props: ["id"] // 接收父组件传递过来的商品Id
    };
</script>

<style lang="scss" scoped>
    textarea {
        font-size: 14px;
        margin: 0;
    }
    .cmt-list {
        margin-top: 4px;
        .cmt-item {
            line-height: 30px;
            .cmt-item-title {
                font-size: 14px;
                background-color: #ddd;
            }
            .cmt-item-body {
                font-size: 13px;
                text-indent: 2em;
            }
        }
    }

</style>
