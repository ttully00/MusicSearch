import Vue from 'vue'
import Router from 'vue-router'
import Itunes from '@/components/Itunes'
import axios from 'axios'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/itunes',
      name: 'Itunes',
      component: Itunes
    },
 
  ]
})
