import Library from '../components/Library.vue'
import Explore from '../components/explore/Explore.vue'
import Admin from '../components/Admin.vue'
import Datums from '../components/Datums.vue'
import AccountProfile from '../components/AccountProfile.vue'
import Look from '../components/look/Look.vue'

export default {
  routes: [
    {
      path: '/library',
      component: Library
    },
    {
      path: '/looks/:id',
      component: Look
    },
    {
      path: '/explore/:id',
      component: Explore
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
