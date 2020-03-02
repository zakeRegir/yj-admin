<template>
  <div class="app-wrapper">
    <!-- 手机模式下的遮罩层 -->
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />

    <!-- 侧边栏 -->
    <sidebar class="sidebar-container" />

    <!-- 导航 -->
    <div></div>
  </div>
</template>

<script>
// import RightPanel from '@/components/RightPanel'
import { Sidebar } from './components'
// import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: { Sidebar },
  ...mapState({
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    showSettings: state => state.settings.showSettings,
    needTagsView: state => state.settings.tagsView,
    fixedHeader: state => state.settings.fixedHeader
  }),
  computed: {
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened, // 缩小侧边
        openSidebar: this.sidebar.opened, // 扩大侧边
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/variables.less';
.app-wrapper {
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - @sideBarWidth);
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
