export default (store) => (to, from, next) => {
  let actionPayload = {
    type: 'navigation/activateToolbarButtons',
    buttons: ['create']
  }

  switch (to.name) {
    case 'datum':
      store.dispatch({
        ...actionPayload,
        buttons: ['explore', 'create']
      })
      break
    case 'explore':
      store.dispatch({
        ...actionPayload,
        buttons: ['save', 'create']
      })
      break
    case 'look':
      store.dispatch({
        ...actionPayload,
        buttons: ['explore', 'create']
      })
      break
    default:
      store.dispatch(actionPayload)
  }

  next()
}
