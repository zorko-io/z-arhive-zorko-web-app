import Home from '../components/home/ZHome.vue'
import ZExplore from '../components/explore/ZExplore.vue'
import ZAccount from '../components/account/ZAccount.vue'
import Look from '../components/look/Look.vue'
import ZDatum from '../components/datum/ZDatum.vue'

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
      path: '/looks/:name',
      components: {
        default: Look,
        controls: NavigationMainToolbarLookControls
      },
      props: {
        default: true,
        controls: true
      },
      meta: {
        title: 'Look',
        fullscreen: true
      }
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
      path: '/datums/:name',
      components: {
        default: ZDatum,
        controls: NavigationMainToolbarLookControls
      },
      props: {
        default: true,
        controls: true
      },
      meta: {
        title: 'Datum',
        fullscreen: true
      }
    },
    {
      path: '/explore/:lookName',
      components: {
        default: ZExplore,
        controls: NavigationMainToolbarExploreControls
      },
      props: {
        default: true,
        controls: true
      },
      meta: {
        title: 'Explore',
        fullscreen: true
      }
    },
    {
      path: '/account',
      component: ZAccount,
      meta: {title: 'Account'}
    },
    {
      path: '/',
      redirect: '/looks'
    }
  ]
}
