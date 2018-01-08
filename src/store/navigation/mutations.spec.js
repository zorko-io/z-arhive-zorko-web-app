import * as mutations from './mutations'
import createState from './state'

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

  it('set active buttons', () => {
    state = createState()

    mutations.setActiveButtons(state, ['save', 'explore'])

    expect(state.toolbarButtons).toEqual([{
      visible: true,
      name: 'save',
      title: 'Save'
    }, {
      visible: true,
      name: 'explore',
      title: 'Explore'
    }, {
      visible: false,
      name: 'create',
      title: 'Create'
    }]
    )
  })
})
