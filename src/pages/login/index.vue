<template>
  <div class="login-container">
    <gbFrom :cloumns="cloumns"></gbFrom>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      cloumns: [
        {
          el: 'input',
          prop: 'username',
          label: '账号'
        },
        {
          el: 'input',
          prop: 'password',
          label: '密码'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {

  }
}
</script>
<style lang="sass">
.login-container
  background-color: #888;
</style>
