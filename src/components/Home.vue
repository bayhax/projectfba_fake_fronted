<template>
    <el-container style="position: absolute;left: 0;top: 0;bottom: 0;right: 0;overflow: hidden;">
      <el-header style="background: #545c64;">
        <!-- -->
        <a class="h5 text-light mb-0 mr-auto"></a>
        <!-- 顶部导航栏 -->
        <el-menu>
          <el-avatar></el-avatar>
          <el-submenu index="100"></el-submenu>
          <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/blog">Blog</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/link_navigation">navigation</router-link></el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <!-- 主布局 -->
        <div id="first_block" style="height: 200px; background-color: #42b983"></div>
        <div id="second_block" style="height: 200px; background-color: azure"></div>
        <div id="third_block" style="height: 300px; background-color: antiquewhite"></div>
        <div id="forth_block" style="height: 400px; background-color: blue"></div>
        <div id="fifth_block" style="height: 300px; background-color: #545c64"></div>
        <div id="sixth_block" style="height: 300px; background-color: coral"></div>
      </el-main>
    </el-container>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
