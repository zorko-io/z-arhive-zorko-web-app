import prop from 'lodash/fp/prop'
import defaults from 'lodash/fp/defaults'

let Scope = {
  getLooks (scope) {
    return prop('looks')(scope)
  }
}

let Navigation = {

  defaultLibraryMenuItem () {
    return defaults({
      icon: 'list',
      component: 'item',
      title: 'Library',
      path: '/library'
    })
  }

}

export default (
  workspace
) => {
  const defaultLibraryItem = Navigation.defaultLibraryMenuItem()({})

  return [defaultLibraryItem]
}
