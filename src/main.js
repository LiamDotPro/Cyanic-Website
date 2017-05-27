// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

// Bootstrap 4
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue-Awesome font awesome icons!
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

// SVG Loader - Material Svg's
import VueSVGIcon from 'vue-svgicon'

Vue.use(VueSVGIcon)

// Production configure - Set to true for deployment.
Vue.config.productionTip = false

// use bootstrap 4 for vue
Vue.use(BootstrapVue)

// Register Vue-Awesome Global Icon
Vue.component('icon', Icon)

// components below!
import NavigationTop from './components/NavigationTop'
import BottomFooter from './components/BottomFooter'
import NotFoundComponent from './components/NotFoundComponent'

// Use Components Statements global components
Vue.component('NavigationTop', NavigationTop)
Vue.component('BottomFooter', BottomFooter)
Vue.component('NotFoundComponent', NotFoundComponent)

// Begin routing store to our application
import store from './store'

// Main App entry Point configured to rooter.
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
    NavigationTop,
    BottomFooter
  }
})

