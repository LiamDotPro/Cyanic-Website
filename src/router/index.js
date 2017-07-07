import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFoundComponent from '@/components/NotFoundComponent'
import ServicesWeb from '@/components/ServicesWeb'
import ServicesSeo from '@/components/ServicesSeo'
import ServicesConsultancy from '@/components/ServicesConsultancy'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'

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
      path: '/web',
      name: 'Web Services',
      component: ServicesWeb

    },
    {
      path: '/seo',
      name: 'Search Engine Optimization',
      component: ServicesSeo

    },
    {
      path: '/consultancy',
      name: 'Consultancy',
      component: ServicesConsultancy

    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact

    },
    {
      path: '*',
      component: NotFoundComponent
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
