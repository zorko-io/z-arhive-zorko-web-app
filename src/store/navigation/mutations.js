export const addAccount = ({items}) => {
  items.push({
    icon: 'perm_identity',
    title: 'Account',
    path: '/account',
    component: 'item'
  })
}

export const toggleDrawer = (state) => {
  state.drawer = !state.drawer
}
