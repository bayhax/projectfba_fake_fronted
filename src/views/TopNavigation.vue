<template>
  <el-menu
    :default-active="navBarIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Blog</el-menu-item>
    <el-menu-item index="3">navigation</el-menu-item>
    <el-submenu index="100">
      <template slot="title">
        <!-- 头像 -->
        <el-avatar :size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        silas
      </template>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'TopNavigation'
}
</script>

<style scoped>

</style>
