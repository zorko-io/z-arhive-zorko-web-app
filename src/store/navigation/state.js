export default () => {
  return {
    drawer: true,
    clipped: false,
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
    ]
  }
}
