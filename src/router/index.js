import Library from '@/components/Library'
import Explore from '@/components/explore/Explore'
import Admin from '@/components/Admin'
import Datums from '@/components/Datums'
import AccountProfile from '@/components/AccountProfile'
import Look from '@/components/Look'

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
