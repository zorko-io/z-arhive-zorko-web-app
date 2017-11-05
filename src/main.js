// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Router from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import './stylus/main.styl'

import App from '@/components/App'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Router)
Vue.use(Vuetify)

const router = new Router(routes)
const globalStore = new Vuex.Store(store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: globalStore,
  router,
  template: '<App/>',
  components: { App }
})
