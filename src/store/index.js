import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

import exploreModule from './explore/module'
import lookModule from './look/module'
import homeModule from './home/module'

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
    })
  }
}
