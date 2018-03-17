import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Itunes from '@/components/Itunes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Itunes',
      component: Itunes
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
