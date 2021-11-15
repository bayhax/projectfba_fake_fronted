<template>
  <div class="top_navigation">
    <div class="top_left">
      <el-menu style="border-right: 0">
        <el-menu-item><img alt="top_logo" src="../assets/logo.png" class="top_logo"></el-menu-item>
      </el-menu>
    </div>
    <div class="top_right">
      <el-menu class="el-menu-demo" mode="horizontal" style="border-bottom: 0;">
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">Blog</el-menu-item>
        <el-menu-item index="3">Link</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNavigation'
}
</script>

<style scoped>
.top_navigation {
  display: flex;
}
.top_left {
  width: 50%;
}
.top_logo {
  width: 40px;
  height: 40px;
}
.top_right {
  width: 50%;
}
.el-menu-item {
  color: #262a2b;
  font-weight: 500;
}

</style>
