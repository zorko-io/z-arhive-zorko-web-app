import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

export default ({namespaced}) => ({
  namespaced,
  state: state(),
  mutations,
  actions
})
