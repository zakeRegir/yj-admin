<template>
  <div class="login-container">
    <div class="form-wrap">
      <h2 class="form-title">{{ showRegister ? '注册' : '登录' }}</h2>
      <gbForm
        v-if="!showRegister"
        :columns="LoginColumns"
        :formData="LoginData"
      />
      <gbForm
        v-if="showRegister"
        :columns="RegisterColumns"
        :formData="RegisterData"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      loginWait: false,
      showRegister: false,
      RegisterData: {},
      // form的数据源
      LoginData: {
        // 没有初始值,直接在columns中定义prop, 数组除外
        username: 'yaojin',
        password: 'yaojin',
        remember: false
      }
    }
  },
  computed: {
    RegisterColumns() {
      return [
        ...this.LoginColumns.slice(0, 2).concat(),
        {
          ...this.renderBtn('text', 'loginWait', 24, '已有账号, 去登陆'),
          style: 'margin: 0; float: right',
          listeners: {
            click: () => (this.showRegister = false)
          }
        },
        this.renderBtn('primary', 'loginWait', 24, '注册', this.register)
      ]
    },
    // 每个form中,组件对应的配置(如果有数据需要读取data值,请定义在computed中)
    LoginColumns() {
      return [
        {
          el: 'input',
          prop: 'username',
          placeholder: '请输入账号',
          clearable: true,
          span: 24,
          slots: {
            prepend: <i class="el-icon-user-solid"></i>
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
            prepend: <i class="el-icon-lock"></i>
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
          ...this.renderBtn('text', 'loginWait', 12, '注册账号'),
          style: 'margin: 0; float: right',
          listeners: {
            click: () => (this.showRegister = true)
          }
        },
        this.renderBtn('primary', 'loginWait', 24, '登录', this.login)
      ]
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    renderBtn(type, loading, span, value, clickFun) {
      return {
        el: 'button',
        type,
        loading: this[loading],
        span,
        style: 'text-align: center',
        childStyle: 'width: 100%',
        slots: {
          default: <span>{value}</span>
        },
        listeners: {
          click: clickFun
        }
      }
    },
    login() {
      console.log(this.LoginData)
    },
    register () {
      console.log(this.RegisterData)
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
  .form-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
    padding: 20px 40px;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin-top: -50px;
    .form-title {
      text-align: center;
      font-size: 30px;
    }
  }
}
</style>
