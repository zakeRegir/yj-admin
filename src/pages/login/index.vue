<template>
  <div class="login-container">
    <!-- <div class="login-header">
      <div class="login-header-logo">
        <a href="https://www.yjdzm.com/">
          <img src="../../assets/img/logo.png" alt="" />
          <span class="login-header-logo-title"> yj-admin</span>
        </a>
      </div>
      <div class="login-header-desc">"大自然"脚手架</div>
    </div> -->
    <div class="form-wrap">
      <h2 class="form-title">登录</h2>
      <gbForm :columns="columns" :formData="formData" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      loading: true,
      // form的数据源
      formData: {
        // 可以不用写,直接在columns中定义prop, 数组除外
        username: 'yaojin',
        password: 'yaojin',
        remember: false
      },
      // 每个form中,组件对应的配置
      columns: [
        {
          el: 'input',
          prop: 'username',
          placeholder: '请输入账号',
          clearable: true,
          span: 24,
          slots: {
            'prepend': <i class='el-icon-user-solid'></i>
          }
        },
        {
          el: 'input',
          prop: 'password',
          placeholder: '请输入密码',
          clearable: true,
          type: 'password',
          span: 24,
          slots: {
            'prepend': <i class='el-icon-lock'></i>
          },
          style: 'margin-bottom: 10px'
        },
        {
          el: 'el-checkbox-group',
          prop: 'remember',
          dataList: [
            {
              label: '自动登录'
            }
          ],
          span: 12,
          style: 'margin: 0'
        },
        {
          el: 'button',
          span: 12,
          type: 'text',
          style: 'margin: 0; float: right',
          slots: {
            'default': <span>忘记密码</span>
          }
        },
        {
          el: 'button',
          type: 'primary',
          loading: false,
          span: 24,
          style: 'text-align: center',
          childStyle: 'width: 100%',
          slots: {
            'default': <span>登录</span>
          },
          listeners: {
            click: this.test
          }
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.$router)
  },
  methods: {
    test () {
      console.log(this.formData)
    }
  }
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 480px;
    padding: 20px 40px;
    background-color: #fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    border-radius: 10px;
    margin-top: -50px;
    .form-title {
      text-align: center;
      font-size: 30px;
    }
  }
}
</style>
