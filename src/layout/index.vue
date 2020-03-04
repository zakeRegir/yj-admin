<template>
  <div class="basic-layout">
    <!-- 头部 -->
    <Navbar></Navbar>
    <!-- 内容和侧边 -->
    <div class="main-container">
      <sidebar class="sidebar-container" />
    </div>
  </div>
</template>

<script>
// import RightPanel from '@/components/RightPanel'
import { Sidebar, Navbar } from './components'
// import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: { Sidebar, Navbar },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
      // showSettings: state => state.settings.showSettings,
      // needTagsView: state => state.settings.tagsView,
      // fixedHeader: state => state.settings.fixedHeader
    })
  },
  mounted () {
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
    min-height: calc(100vh - 60px);
  }
}
</style>
