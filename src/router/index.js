import Home from '../components/home/ZHome.vue'
import ZExplore from '../components/explore/ZExplore.vue'
import ZAccount from '../components/account/ZAccount.vue'
import ZLook from '../components/look/ZLook.vue'
import ZDatum from '../components/datum/ZDatum.vue'

import ZNavigationMainToolbarLookControls from '../components/navigation/ZNavigationMainToolbarLookControls.vue'
import ZNavigationMainToolbarExploreControls from '../components/navigation/ZNavigationMainToolbarExploreControls.vue'

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
        default: ZLook,
        controls: ZNavigationMainToolbarLookControls
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
        controls: ZNavigationMainToolbarLookControls
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
      path: '/explore/:name',
      components: {
        default: ZExplore,
        controls: ZNavigationMainToolbarExploreControls
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
