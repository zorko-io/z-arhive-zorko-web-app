import Home from '../components/home/Home.vue'
import Explore from '../components/explore/Explore.vue'
import Account from '../components/account/Account.vue'
import Look from '../components/look/Look.vue'

export default {
  routes: [
    {
      path: '/looks',
      component: Home,
      props: {
        default: true,
        looksPreview: true
      }
    },
    {
      path: '/datums',
      component: Home,
      props: {
        default: true,
        datumsPreview: true
      }
    },
    {
      path: '/looks/:name',
      component: Look,
      props: true
    },
    {
      path: '/explore/:lookName',
      component: Explore,
      props: true
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/',
      redirect: '/looks'
    }
  ]
}
