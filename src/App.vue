<template>
  <div id="app">
    <div>
      <el-container style="position: absolute;left: 0;top: 0;bottom: 0;right: 0;overflow: hidden;">
        <el-header class="d-flex align-items-center" style="background: #545c64;">
          <!-- -->
          <a class="h5 text-light mb-0 mr-auto"></a>
          <!-- 顶部导航栏 -->
          <el-menu
            :default-active="navBarIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">Home</el-menu-item>
            <el-menu-item index="1">Blog</el-menu-item>
            <el-submenu index="100">
              <template slot="title">
                <!-- 头像 -->
                <el-avatar :size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                silas
              </template>
            </el-submenu>
          </el-menu>
        </el-header>
        <el-container style="height: 100%;padding-bottom: 60px;">
          <!-- 侧边布局 -->
          <el-aside width="200px">

          </el-aside>
          <!-- 主布局 -->
        </el-container>
      </el-container>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navBarIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
