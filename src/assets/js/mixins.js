export const messageMX = {
  methods: {
    messageTips(message, type, reason) {
      this.$message({
        message: reason ? `${message}失败，原因：${reason}` : `${message}成功`,
        type
      })
    }
  }
}
