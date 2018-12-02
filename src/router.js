import Vue from 'vue'
import Router from 'vue-router'
import HappyDialog from './views/dialog'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/HappyDialog',
      name: 'HappyDialog',
      component: HappyDialog
    }
  ]
})
