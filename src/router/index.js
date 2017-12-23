import Library from '../components/library/Library.vue'
import Explore from '../components/explore/Explore.vue'
import Admin from '../components/Admin.vue'
import Datums from '../components/datums/Datums.vue'
import AccountProfile from '../components/AccountProfile.vue'
import Look from '../components/look/Look.vue'

export default {
  routes: [
    {
      path: '/library',
      component: Library
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
      path: '/datums',
      component: Datums
    },
    {
      path: '/account/profile',
      component: AccountProfile
    },
    {
      path: '/library',
      component: Library
    },
    {
      path: '/',
      redirect: '/library'
    }
  ]
}
