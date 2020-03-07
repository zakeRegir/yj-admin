<template>
  <div>
    <el-drawer
      :visible="showDrawer"
      :show-close="false"
      direction="rtl"
      size="300px"
      @close="handleClose"
    >
      <template v-slot:title>
        <div class="drawer-horizontal">
          <div class="drawer-center">
            <h3>个性化设置</h3>
          </div>
        </div>
      </template>
      <div class="drawer-content">
        <span>开启标签页</span>
        <el-switch v-model="tagsView"> </el-switch>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    handleClose: [Function],
    showDrawer: [Boolean]
  },
  computed: {
    tagsView: {
      get() {
        return this.$store.state.settings.tagsView
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value: val
        })
      }
    }
  }
}
</script>

<style lang='less'>
.drawer-horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 24px 0;
  background-color: #dcdfe6;
  position: relative;
  .drawer-center {
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    background-color: #fff;
    padding: 0 20px;
    font-weight: 500;
    color: #303133;
    font-size: 14px;
  }
}
.drawer-content {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
