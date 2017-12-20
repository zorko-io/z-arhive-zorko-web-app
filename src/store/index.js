import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

import exploreModule from './explore/module'
import lookModule from './look/module'
import libraryModule from './library/module'

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
    library: libraryModule({
      namespaced: true
    })
  }
}
