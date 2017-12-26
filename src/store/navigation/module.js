import state from './state'
import * as mutations from './mutations'

export default ({namespaced}) => ({
  namespaced,
  state: state(),
  mutations
})
