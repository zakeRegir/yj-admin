<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="less" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 20px;
  margin-left: 230px;
}
</style>
