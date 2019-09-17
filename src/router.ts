import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Example from './views/Example.vue'
import RXSample from './views/RXSample.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/rx_sample',
      name: 'rx_sample',
      component: RXSample
    },
  ]
})
