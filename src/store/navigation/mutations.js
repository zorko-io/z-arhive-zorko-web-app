export const addAccount = async ({items}) => {
  items.push({
    icon: 'perm_identity',
    title: 'Account',
    path: '/account/profile',
    component: 'item'
  })
}
