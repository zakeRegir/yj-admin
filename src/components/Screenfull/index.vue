<template>
  <div>
    <el-tooltip
      :content="isFullscreen ? '退出全屏' : '全屏显示'"
      effect="dark"
      placement="bottom"
    >
      <svg-icon
        :icon-class="isFullscreen ? 'exit-full' : 'full'"
        @click="click"
      />
    </el-tooltip>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: '你的浏览器不支持全屏操作',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
      console.log(this.isFullscreen)
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

