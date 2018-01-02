import Router from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'

import App from './components/App.vue'
import routes from './router'
import storeOptions from './store/'

import FullscreenNavigationGuard from './navigation-guards/FullscreenNavigationGuard'

export default () => ({Vue, el}) => {
  Vue.config.productionTip = false

  Vue.use(Vuex)
  Vue.use(Router)
  Vue.use(Vuetify)

  const router = new Router(routes)
  const store = new Vuex.Store(storeOptions)
  const fullscreenNavigationGuard = FullscreenNavigationGuard(store)

  sync(store, router)

  router.beforeEach(fullscreenNavigationGuard)

  const globalVueOptions = {
    store: store,
    router,
    template: '<App/>',
    components: {App}
  }

  if (el) {
    globalVueOptions.el = el
  }

  return new Vue(globalVueOptions)
}
