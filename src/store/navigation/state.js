export default () => {
  return {
    drawerVisibility: true,
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
        name: 'datums',
        component: 'item'
      }
    ],
    toolbarButtons: [{
      visible: false,
      name: 'save',
      title: 'Save'
    }, {
      visible: false,
      name: 'explore',
      title: 'Explore'
    }, {
      visible: true,
      name: 'create',
      title: 'Create'
    }]
  }
}
