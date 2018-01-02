export const addAccount = ({items}) => {
  items.push({
    icon: 'perm_identity',
    title: 'Account',
    path: '/account',
    component: 'item'
  })
}

export const toggleDrawerVisibility = (state) => {
  state.drawerVisibility = !state.drawerVisibility
}

export const setDrawerVisibility = (state, value) => {
  state.drawerVisibility = value
}

export const setFullscreen = (state, value) => {
  state.fullscreen = value
}

