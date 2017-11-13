import * as R from 'ramda'
import Workspace from '../Workspace'
import exploreToNavigationItem from './exploreToNavigationItem'
import modelToNavigationItem from './modelToNavigationItem'

export default {

  assembleNavigationItems (topNavigationItems, workspace) {
    const currentScope = Workspace.getCurrentScope(workspace)

    console.log()

    const getExploreNavigation = R.pipe(
      R.prop('explores'),
      R.map(exploreToNavigationItem)
    )

    const getModelNavigation = R.pipe(
      R.prop('models'),
      R.map(modelToNavigationItem)
    )

    const augmentNavigation = R.map((item) => {
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
  }
}
