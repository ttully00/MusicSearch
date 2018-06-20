import Vue from 'vue'
import Router from 'vue-router'
import Itunes from '@/components/Itunes'
import About from '@/components/About'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/itunes',
      name: 'Itunes',
      component: Itunes
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
