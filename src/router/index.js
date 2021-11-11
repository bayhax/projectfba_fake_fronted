import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '../views/Blog'
import LinkNavigation from '../views/LinkNavigation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/link_navigation',
      name: 'LinkNavigation',
      component: LinkNavigation
    }
  ]
})
