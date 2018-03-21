import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Itunes from '@/components/Itunes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/itunes',
      name: 'Itunes',
      component: Itunes
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
