<template>
  <section class="app-main">
    <tags-view />
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" class="content" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { TagsView } from './index'
export default {
  name: 'AppMain',
  components: { TagsView },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  mounted() {
    console.log(TagsView, 9999)
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
  margin-left: 230px;
  .content {
    padding: 20px;
  }
}
</style>
