<template>
  <div class="layout-header">
    <header class="header-navbar">
      <Logo></Logo>
      <ul class="nav-right">
        <HeaderSearch></HeaderSearch>
        <Screenfull></Screenfull>
      </ul>
    </header>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Screenfull from '@/components/Screenfull'
import HeaderSearch from '@/components/HeaderSearch'
export default {
  components: { HeaderSearch, Logo, Screenfull },
  props: {
    sidebar: [Boolean]
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
    }
  }
}
</style>
