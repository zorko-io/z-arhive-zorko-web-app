import ZHome from '../components/home/ZHome.vue'
import ZExplore from '../components/explore/ZExplore.vue'
import ZAccount from '../components/account/ZAccount.vue'
import ZLook from '../components/look/ZLook.vue'
import ZDatum from '../components/datum/ZDatum.vue'

export default {
  routes: [
    {
      path: '/looks',
      component: ZHome,
      props: {
        default: true,
        looksPreview: true
      },
      meta: {title: 'Looks'}
    },
    {
      path: '/looks/:name',
      name: 'look',
      component: ZLook,
      props: true,
      meta: {
        title: 'Look',
        fullscreen: true
      }
    },
    {
      path: '/datums',
      component: ZHome,
      props: {
        default: true,
        datumsPreview: true
      },
      meta: {title: 'Datums'}
    },
    {
      path: '/datums/:name',
      name: 'datum',
      component: ZDatum,
      props: true,
      meta: {
        title: 'Datum',
        fullscreen: true
      }
    },
    {
      path: '/explore/:name',
      name: 'explore',
      component: ZExplore,
      props: true,
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
