<template>
  <el-dialog
    v-el-drag-dialog
    :title="title"
    :visible="value"
    :close-on-click-modal="false"
    :width="width"
    :class="{'ele-dialog': line}"
    @close="close"
  >
    <slot></slot>
    <div slot="footer" class="dialog-footer">
      <slot name="dialog-footer">
        <el-button size="small" @click="closeBtn">取 消</el-button>
        <el-button
          type="primary"
          size="small"
          @click="confirmBtn"
        >提 交</el-button>
      </slot>
    </div>
  </el-dialog>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog'
export default {
  name: 'EleDialog',
  directives: { elDragDialog },
  props: {
    // 显示与隐藏，绑定到v-model上的值
    value: {
      type: Boolean,
      default: false,
      required: true
    },
    // 标题
    title: {
      type: String,
      default: '',
      required: false
    },
    width: {
      type: String,
      default: '500px'
    },
    confirmDisable: {
      type: Boolean,
      default: false
    },
    // 是否隐藏底部
    isHideFooter: {
      type: Boolean,
      default: false,
      required: false
    },
    // 关闭的事件回调
    closeFunc: {
      type: Function,
      required: false
    },
    // 关闭按钮文字
    closeText: {
      type: String,
      default: '关闭',
      required: false
    },
    // 确认的事件回调
    confirmFunc: {
      type: Function,
      required: false
    },
    // 是否显示下划线
    line: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    // 计算内容的宽度高度
    contentStyle() {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
  },
  methods: {
    // 关闭窗口的事件
    close() {
      this.$emit('input', false)
    },
    // 关闭按钮事件
    closeBtn() {
      if (this.closeFunc) {
        this.closeFunc()
      } else {
        this.close()
      }
    },
    // 确认按钮事件
    confirmBtn() {
      if (this.confirmFunc) {
        this.confirmFunc()
      } else {
        this.close()
      }
    }
  }
}
</script>
<style lang="less">
.ele-dialog {
  .el-dialog__header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  }
  .el-dialog__footer {
    border-top: 1px solid rgba(0, 0, 0, 0.09);
  }
}
</style>
