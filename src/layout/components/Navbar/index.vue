<template>
  <div class="layout-header">
    <header class="header-navbar">
      <Logo></Logo>
      <breadcrumb></breadcrumb>
      <ul class="nav-right">
        <HeaderSearch class="right-Item"></HeaderSearch>
        <Screenfull class="right-Item"></Screenfull>
        <el-dropdown trigger="click" class="settingDrop right-Item">
          <div
            class="userAvatar"
            :style="{ background: 'url(' + avatar + ')' }"
          ></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人主页</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </ul>
    </header>
  </div>
</template>

<script>
import breadcrumb from '@/components/Breadcrumb'
import Logo from './Logo.vue'
import Screenfull from '@/components/Screenfull'
import HeaderSearch from '@/components/HeaderSearch'
export default {
  components: { HeaderSearch, Logo, Screenfull, breadcrumb },
  computed: {
    avatar() {
      return this.$store.state.user.avatar
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  },
  mounted() {
    console.log(this.avatar)
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  height: auto;
  line-height: normal;
  padding: 0;
  background: #fff;
  overflow: hidden;
  .header-navbar {
    z-index: 1030;
    margin-bottom: 0;
    height: 60px;
    color: #666;
    background-color: #fff;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #e0e0e0;
    padding-left: 0;
    list-style: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    .nav-right {
      float: right;
      margin: 0 15px 0 0;
      .right-Item {
        float: left;
        font-weight: 600;
        height: 59px;
        position: relative;
        display: block;
        line-height: 59px;
        font-size: 18px;
        padding-right: 12px;
        padding-left: 12px;
        cursor: pointer;
      }
      .settingDrop {
        .userAvatar {
          background-repeat: no-repeat !important;
          background-size: cover !important;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
