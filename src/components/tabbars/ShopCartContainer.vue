<template>
  <div>
    <cartContent></cartContent>
  </div>
</template>

<script>
  import cartContent from "../shoppingCart/CartList.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    // 注册子组件
    cartContent
  }
};
</script>

<style lang="scss" scoped>

</style>
