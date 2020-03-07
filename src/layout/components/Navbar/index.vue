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
            <el-dropdown-item @click.native="showDrawer = true">设置</el-dropdown-item>
            <el-dropdown-item @click.native="showLayout = true">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </ul>
    </header>
    <Settings :showDrawer="showDrawer" :handleClose="handleClose" />
    <gbDialog v-model="showLayout" title="退出登录" :confirmFunc="logout">
      确定要退出登录吗?
    </gbDialog>
  </div>
</template>

<script>
import Settings from '../Settings/index.vue'
import breadcrumb from '@/components/Breadcrumb'
import Logo from './Logo.vue'
import Screenfull from '@/components/Screenfull'
import HeaderSearch from '@/components/HeaderSearch'
export default {
  components: { HeaderSearch, Logo, Screenfull, breadcrumb, Settings },
  data () {
    return {
      showLayout: false,
      showDrawer: false
    }
  },
  computed: {
    avatar() {
      return this.$store.state.user.avatar
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    handleClose () {
      this.showDrawer = false
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  position: relative;
  height: 60px;
  line-height: normal;
  padding: 0;
  background: #fff;
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
