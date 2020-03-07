<template>
  <div class="basic-layout">
    <!-- 头部 -->
    <Navbar></Navbar>
    <!-- 内容和侧边 -->
    <div class="main-container" :class="classObj">
      <sidebar class="sidebar-container" />
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
// import RightPanel from '@/components/RightPanel'
import { Sidebar, Navbar, AppMain } from './components'
// import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: { Sidebar, Navbar, AppMain },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
      // showSettings: state => state.settings.showSettings,
      // needTagsView: state => state.settings.tagsView,
      // fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened, // 缩小侧边
        openSidebar: this.sidebar.opened, // 扩大侧边
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  },
  mounted() {
    console.log(window.Vue)
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/variables.less';
.basic-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  .main-container {
    display: flex;
    min-height: calc(100vh - 60px);
    background: #f0f2f5;
    flex: auto;
  }
}
</style>
