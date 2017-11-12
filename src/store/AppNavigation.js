import defaults from 'lodash/fp/defaults'
import reduce from 'lodash/fp/reduce'
import flow from 'lodash/fp/flow'
import prop from 'lodash/fp/prop'
import Workspace from './Workspace'

function buildNavigationForLibrary () {
  return defaults({
    icon: 'list',
    component: 'item',
    title: 'Library',
    path: '/library'
  })({})
}

function getExploreItems (explores) {
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
  }, explores)
}

function buildNavigationFromModel (models) {
  function mapModel (model) {
    return {
      title: model.name,
      path: '/model/' + model.name
    }
  }

  return reduce(function (memo, model) {
    memo.children.push(mapModel(model))
    return memo
  }, {
    icon: 'bubble_chart',
    title: 'Model',
    path: '/model',
    component: 'model',
    children: []
  }, models)
}

function buildNavigationFromWorkspace (workspace) {
  const scope = Workspace.getCurrentScope(workspace)

  // const getLibraryNavigation = flow(
  //   prop('looks'),
  //   buildNavigationForLibrary
  // )

  // console.log(getLibraryNavigation(scope))

  const getExploreNavigation = flow(
    prop('explores'),
    getExploreItems
  )

  console.log(getExploreNavigation(scope))

  return [
    buildNavigationForLibrary(),
    getExploreNavigation(scope)
  ]
}

export default {

  getExploreItems,

  buildNavigationFromModel,

  buildNavigationFromWorkspace
}
