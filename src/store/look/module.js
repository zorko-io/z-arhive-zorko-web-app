import state from './state'

export default ({namespaced}) => ({
  namespaced,
  state: state()
})
