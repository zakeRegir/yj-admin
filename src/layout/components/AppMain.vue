<template>
  <section class="app-main">
    <tags-view v-if="needTagsView" />
    <el-scrollbar class="content-scrollbar">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key" class="content" />
        </keep-alive>
      </transition>
    </el-scrollbar>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { TagsView } from './index'
export default {
  name: 'AppMain',
  components: { TagsView },
  computed: {
    key() {
      return this.$route.path
    },
    ...mapState({
      cachedViews: state => state.tagsView.cachedViews,
      needTagsView: state => state.settings.tagsView
    })
  }
}
</script>

<style lang="less" scoped>
.app-main {
  /* 50= navbar  50  */
  transition: margin-left 0.28s;
  min-height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-left: 230px;
  .content {
    margin: 15px;
  }
  .content-scrollbar {
    height: 100%;
    position: relative;
    // padding-bottom: 20px;
    // margin-bottom: 20px;
  }
}
</style>
