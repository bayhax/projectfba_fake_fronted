<template>
  <div id="app">
    <top-navigation></top-navigation>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import TopNavigation from './components/TopNavigation'
import CommonFooter from './components/CommonFooter'
export default {
  name: 'App',
  data () {
    return {
      navBarIndex: '1'
    }
  },
  components: {
    TopNavigation,
    CommonFooter
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
}
</style>
