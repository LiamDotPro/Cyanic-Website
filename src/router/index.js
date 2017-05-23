import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: '/',
      component: Home

    },
    {
      path: '/home',
      name: 'Homepage',
      component: Home

    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
