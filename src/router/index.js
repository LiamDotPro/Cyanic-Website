import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFoundComponent from '@/components/NotFoundComponent'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'
import Project from '@/components/Project'
import Seo from '@/components/Seo'
import Web from '@/components/Web'
import Branding from '@/components/Branding'

import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

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
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/project/:id',
      name: 'project catch',
      component: Project,
      beforeEnter: (to, from, next) => {
        function replaceAll (str, find, replace) {
          return str.replace(new RegExp(find, 'g'), replace)
        }

        function convertCase (str) {
          let lower = str.toLowerCase()
          return lower.replace(/(^| )(\w)/g, function (x) {
            return x.toUpperCase()
          })
        }

        document.title = 'Cyanic - ' + convertCase(replaceAll(to.path.replace('/project/', ''), '-', ' '))
        console.log(document.title)
        next()
      }
    },
    {
      path: '/seo',
      name: 'Seo',
      component: Seo
    },
    {
      path: '/web',
      name: 'Web',
      component: Web
    },
    {
      path: '/branding',
      name: 'branding',
      component: Branding
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
