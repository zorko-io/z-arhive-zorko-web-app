export default () => {
  return {
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
      }
    ]
  }
}
