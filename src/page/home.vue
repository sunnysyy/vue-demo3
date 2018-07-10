<template>
  <div class="home">
    <header><h1>后台管理系统</h1></header>
    <aside>
      <el-menu router :default-active="$route.path">
        <template v-for="item in menuList">
          <el-submenu :index="item.path" :key="item.path" v-if="item.children">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="itx in item.children" :index="itx.path" :key="itx.path">{{itx.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item :index="item.path" :key="item.path" v-else><i class="el-icon-location"></i><span solt="title">{{item.name}}</span></el-menu-item>
        </template>
      </el-menu>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import MenuList from '@/router/routeNav.js'
export default {
  name: 'home',
  data () {
    return {
      menuList: MenuList
    }
  },
  created () {
    // console.log(MenuList)
  }
}
</script>

<style scoped>

</style>
