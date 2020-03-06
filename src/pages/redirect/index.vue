<script>
export default {
  created () {
    const { params } = this.$route
    console.log(params)
    const { path } = params
    this.$router.replace('/' + path)
  },
  render (h) {
    return h()
  }
}
</script>
