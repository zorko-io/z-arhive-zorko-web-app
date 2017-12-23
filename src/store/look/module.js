import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'

export default ({namespaced}) => ({
  namespaced,
  state: state(),
  actions,
  mutations
})
