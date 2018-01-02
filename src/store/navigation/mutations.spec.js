import * as mutations from './mutations'

describe('Navigation Mutations', () => {
  let state

  it('adds account', () => {
    state = {items: []}

    mutations.addAccount(state)

    expect(state.items.length).toEqual(1)
    expect(state.items.pop()).toEqual({
      icon: 'perm_identity',
      title: 'Account',
      path: '/account',
      component: 'item'
    })
  })

  it('toggle drawer visibility', () => {
    mutations.toggleDrawerVisibility(state)

    expect(state.drawerVisibility).toBeTruthy()

    mutations.toggleDrawerVisibility(state)

    expect(state.drawerVisibility).toBeFalsy()
  })

  it('set drawer visibility', () => {
    mutations.setDrawerVisibility(state, true)

    expect(state.drawerVisibility).toBeTruthy()
  })

  it('set fullscreen', () => {
    mutations.setFullscreen(state, true)

    expect(state.fullscreen).toBeTruthy()
  })
})
