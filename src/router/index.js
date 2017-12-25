import Home from '../components/home/Home.vue'
import Explore from '../components/explore/Explore.vue'
import Account from '../components/account/Account.vue'
import Look from '../components/look/Look.vue'

import NavigationMainToolbarLookControls from '../components/navigation/NavigationMainToolbarLookControls.vue'
import NavigationMainToolbarExploreControls from '../components/navigation/NavigationMainToolbarExploreControls.vue'

export default {
  routes: [
    {
      path: '/looks',
      component: Home,
      props: {
        default: true,
        looksPreview: true
      },
      meta: {title: 'Looks'}
    },
    {
      path: '/datums',
      component: Home,
      props: {
        default: true,
        datumsPreview: true
      },
      meta: {title: 'Datums'}
    },
    {
      path: '/looks/:name',
      components: {
        default: Look,
        controls: NavigationMainToolbarLookControls
      },
      props: {
        default: true,
        controls: true
      },
      meta: {title: 'Look'}
    },
    {
      path: '/explore/:lookName',
      components: {
        default: Explore,
        controls: NavigationMainToolbarExploreControls
      },
      props: {
        default: true,
        controls: true
      },
      meta: {title: 'Explore'}
    },
    {
      path: '/account',
      component: Account,
      meta: {title: 'Account'}
    },
    {
      path: '/',
      redirect: '/looks'
    }
  ]
}
