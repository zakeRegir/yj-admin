<template>
  <div class="layout-header">
    <header class="header-navbar">
      <Logo></Logo>
      <ul class="nav-right">
        <HeaderSearch class="right-Item"></HeaderSearch>
        <Screenfull class="right-Item"></Screenfull>
      </ul>
    </header>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Screenfull from '@/components/Screenfull'
import HeaderSearch from '@/components/HeaderSearch'
export default {
  components: { HeaderSearch, Logo, Screenfull }
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
        line-height: 59px;
        position: relative;
        display: block;
        font-size: 18px;
        padding-right: 12px;
        padding-left: 12px;
        cursor: pointer;
      }
    }
  }
}
</style>
