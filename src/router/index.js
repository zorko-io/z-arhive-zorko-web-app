import Home from '../components/library/Home.vue'
import Explore from '../components/explore/Explore.vue'
import Admin from '../components/Admin.vue'
import AccountProfile from '../components/AccountProfile.vue'
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
      path: '/admin',
      component: Admin
    },
    {
      path: '/account/profile',
      component: AccountProfile
    },
    {
      path: '/',
      redirect: '/looks'
    }
  ]
}
