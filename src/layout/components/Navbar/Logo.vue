<template>
  <div class="nav-branding">
    <router-link key="expand" class="sidebar-logo-link" to="/">
      <img v-if="logo && sidebar" :src="logo" class="sidebar-logo" />
      <b class="sidebar-title">{{ title.slice(0, 2) }}</b>
      Admin
    </router-link>
    <span class="sidebar-handle" @click="toggleSideBar">
      <i class="el-icon-s-fold" />
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SidebarLogo',
  data() {
    return {
      title: 'YJ',
      logo:
        'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="less" scoped>
.nav-branding {
  position: relative;
  overflow: hidden;
  float: left;
  width: 230px;
  height: 60px;
  margin-right: 10px;
  background-color: transparent;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  text-align: center;
  .sidebar-logo-link {
    color: #666;
    height: 60px;
    line-height: 58px;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.6px;
    padding: 0 0 0 15px;
    display: inline-block;
    overflow: hidden;
    width: 170px;
    .sidebar-logo {
      vertical-align: middle;
      width: 35px;
      height: auto;
      margin-right: 10px;
    }
    .sidebar-title {
      font-weight: bold
    }
  }
  .sidebar-handle {
    float: right;
    cursor: pointer;
    font-size: 20px;
    line-height: 58px;
    max-height: 60px;
    width: 60px;
    text-align: center;
    user-select: none;
  }
}
</style>
