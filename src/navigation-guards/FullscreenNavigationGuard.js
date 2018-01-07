export default (store) => (to, from, next) => {
  if (to.meta && to.meta.fullscreen) {
    store.dispatch({
      type: 'navigation/changeFullscreenMode',
      fullscreen: true
    })
  } else {
    store.dispatch({
      type: 'navigation/changeFullscreenMode',
      fullscreen: false
    })
  }
  next()
}
