import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFoundComponent from '@/components/NotFoundComponent'
import ServicesWeb from '@/components/ServicesWeb'
import ServicesSeo from '@/components/ServicesSeo'
import ServicesConsultancy from '@/components/ServicesConsultancy'
import Blog from '@/components/Blog'
import CaseStudies from '@/components/CaseStudies'
import Contact from '@/components/Contact'

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
      path: '/case-studies',
      name: 'Case Studies',
      component: CaseStudies

    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog

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
  ]
})
