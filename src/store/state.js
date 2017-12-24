export default function () {
  return {
    isLoading: true,
    account: null,
    loginRequiredBy: null,
    library: {
      looks: []
    },
    navigation: {
      visible: true,
      items: [
        {
          icon: 'list',
          component: 'item',
          title: 'Looks',
          name: 'looks',
          path: '/looks'
        },
        {
          icon: 'bubble_chart',
          title: 'Datums',
          path: '/datums',
          component: 'item'
        },
        {
          icon: 'perm_identity',
          title: 'Account',
          path: '/account/profile',
          component: 'item'
        }
      ]
    }
  }
}
