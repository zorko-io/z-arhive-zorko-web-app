import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

import exploreModule from './explore/module'
import lookModule from './look/module'
import homeModule from './home/module'
import navigationModule from './navigation/module'
import datumModule from './datum/module'

export default {
  strict: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    explore: exploreModule({
      namespaced: true
    }),
    look: lookModule({
      namespaced: true
    }),
    home: homeModule({
      namespaced: true
    }),
    navigation: navigationModule({
      namespaced: true
    }),
    datum: datumModule({
      namespaced: true
    })
  }
}
