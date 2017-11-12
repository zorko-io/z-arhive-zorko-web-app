import flow from 'lodash/fp/flow'
import prop from 'lodash/fp/prop'
import map from 'lodash/fp/map'
import Workspace from '../Workspace'
import exploreToNavigationItem from './exploreToNavigationItem'
import modelToNavigationItem from './modelToNavigationItem'

export default {

  assembleNavigationItems (topNavigationItems, workspace) {
    const currentScope = Workspace.getCurrentScope(workspace)

    const getExploreNavigation = flow(
      prop('explores'),
      map(exploreToNavigationItem)
    )

    const getModelNavigation = flow(
      prop('models'),
      map(modelToNavigationItem)
    )

    const augmentNavigation = map((item) => {
      if (item.name === 'library') {
        return item
      } else if (item.name === 'explore') {
        item.children = getExploreNavigation(currentScope)
        return item
      } else if (item.name === 'model') {
        item.children = getModelNavigation(currentScope)
        return item
      } else {
        return item
      }
    })

    return augmentNavigation(topNavigationItems)
  },

  defaultAppNavigationTopItems: () => (
    [{
      icon: 'list',
      component: 'item',
      name: 'library',
      title: 'Library',
      path: '/library',
      children: []
    },
    {
      icon: 'highlight',
      title: 'Explore',
      name: 'explore',
      component: 'explore',
      path: '/explore',
      children: []
    }, {
      icon: 'bubble_chart',
      title: 'Model',
      path: '/model',
      name: 'model',
      component: 'model',
      children: []
    },
    {
      icon: 'build',
      title: 'Admin',
      path: '/admin',
      component: 'group-item',
      children: [{
        title: 'Connections',
        path: '/admin/connections/'
      }]
    },
    {
      icon: 'perm_identity',
      title: 'Account',
      path: '/account',
      component: 'group-item',
      children: [{
        title: 'Profile',
        path: '/account/profile'
      }, {
        title: 'Repositories',
        path: '/account/repositories'
      }]
    }]
  )

}
