<template>
    <cmtbox :id="id"></cmtbox>
</template>

<script>
    import cmtbox from "../utit/Comment.vue";
    export default {
        name: "CommentList",
        data() {
            return {};
        },
        methods: {},
        props: ["id"],
        components: {
            cmtbox
        }
    };
</script>

<style scoped>

</style>
