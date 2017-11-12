import prop from 'lodash/fp/prop'
import defaults from 'lodash/fp/defaults'
import Workspace from './Workspace'
import reduce from 'lodash/fp/reduce'

let Scope = {
  getLooks: () => prop('looks'),
  getExplores: () => prop('explores')
}

function defaultLibraryMenuItem () {
  return defaults({
    icon: 'list',
    component: 'item',
    title: 'Library',
    path: '/library'
  })
}

function findExploreItem (scope) {
  const getExplores = Scope.getExplores()

  console.log(getExplores(scope))

  return []
}

export default {
  buildNavigationFromWorkspace (workspace) {
    const scope = Workspace.getCurrentScope(workspace)
    const defaultLibraryItem = defaultLibraryMenuItem()({})
    const exploreItem = findExploreItem(scope)

    return [defaultLibraryItem, exploreItem]
  },

  buildNavigationFromExplore () {
    function mapExplore (explore) {
      let result = {
        title: explore.title
      }

      if (explore.type === 'group') {
        result = Object.assign(result, {
          children: explore.children.map(mapExplore)
        })
      } else {
        result = Object.assign(result, {
          path: '/explore/' + explore.id
        })
      }

      return result
    }

    return reduce(function (memo, explore) {
      memo.children.push(mapExplore(explore))
      return memo
    }, {
      icon: 'highlight',
      title: 'Explore',
      component: 'explore',
      path: '/explore',
      children: []
    })
  }

}
