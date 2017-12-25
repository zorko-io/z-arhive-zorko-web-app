import Router from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'

import App from './components/App.vue'
import routes from './router'
import store from './store/'

export default () => ({Vue, el}) => {
  Vue.config.productionTip = false

  Vue.use(Vuex)
  Vue.use(Router)
  Vue.use(Vuetify)

  const router = new Router(routes)
  const globalStore = new Vuex.Store(store)

  sync(globalStore, router)

  const globalVueOptions = {
    store: globalStore,
    router,
    template: '<App/>',
    components: {App}
  }

  if (el) {
    globalVueOptions.el = el
  }

  return new Vue(globalVueOptions)
}
