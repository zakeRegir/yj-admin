<template>
  <div>
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.less'
// import Logo from './Logo'
export default {
  components: { SidebarItem },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar']),
    // 获取less变量
    variables() {
      return variables
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    // 水平折叠是否开启
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {},
  mounted() {
    console.log(this.permission_routes, 9999999)
  }
}
</script>

<style></style>
