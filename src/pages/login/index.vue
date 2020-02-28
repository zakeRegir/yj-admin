<template>
  <div class="login-container">
    <div class="login-header">
      <div class="login-header-logo">
        <a href="https://www.yjdzm.com/">
          <img src="../../assets/img/logo.png" alt="" />
          <span class="login-header-logo-title"> yj-admin</span>
        </a>
      </div>
      <div class="login-header-desc">"大自然"脚手架</div>
    </div>
    <div class="form-wrap">
      <gbForm :columns="columns" :formData="formData" :elRow="rowData" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      rowData: {
        type: 'flex',
        justify: 'center',
        align: 'middle',
        style: 'flex-direction: column'
      },
      // form的数据源
      formData: {
        username: 'yaojin',
        password: 'yaojin'
      },
      // 每个form中,组件对应的配置
      columns: [
        {
          el: 'input',
          prop: 'username',
          label: '账号',
          placeholder: '请输入账号',
          clearable: true,
          span: 6,
          style: `color: red`
        },
        {
          el: 'input',
          prop: 'password',
          label: '密码',
          placeholder: '请输入密码',
          clearable: true,
          type: 'password',
          span: 6
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
.login-container {
  background-color: #f6f7f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .login-header {
    margin-top: 30px;
    text-align: center;
    .login-header-logo {
      display: flex;
      justify-content: center;
      align-self: center;
    }
    .login-header-title {
      font-size: 30px;
      font-weight: bold;
    }
  }
  .form-wrap {
    background-color: #fff;
  }
}
</style>
