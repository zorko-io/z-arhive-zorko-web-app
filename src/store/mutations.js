import AppNavigation from '@/store/navigation/AppNavigation'

export const stopLoading = (state) => {
  state.isLoading = false
}

export const setAccount = (state, account) => {
  state.account = account
}

export const initializeNavigation = ({workspace, workspaceNavigation}) => {
  const topItems = workspaceNavigation.items

  workspaceNavigation.items = AppNavigation.assembleNavigationItems(topItems, workspace)
}

export const setInitialData = (state, data) => {
  state.data = data
}

export const toggleFieldSelection = (state, {field}) => {
  const stateField = state.exploreFields.find(
    (stateField) => (stateField.text === field.text)
  )
  stateField.selected = !field.selected
}

export const addRemoveFilter = (state, {filter}) => {
  let filters = []
  let stateHasFilter = false
  state.selectedFilters.forEach(selectedFilter => {
    if (selectedFilter !== filter) {
      filters.push(selectedFilter)
    } else {
      stateHasFilter = true
    }
  })
  if (!stateHasFilter) {
    filters.push(filter)
  }
  state.selectedFilters = filters
}

export const setExploreFields = (state) => {
  let firstDataItem = state.data[0]
  let fields = []
  if (firstDataItem) {
    const firstDataItemKeys = Object.keys(firstDataItem)
    const isNumber = (key) => (typeof firstDataItem[key] === 'number')

    fields = firstDataItemKeys.map((key) => ({
      text: key,
      type: isNumber(key) ? 'measure' : 'dimention',
      selected: false
    }))
  }

  state.exploreFields = fields
}

export const loginRequiredByActon = (state, actionName) => {
  state.loginRequiredBy = actionName
}

export const rejectLogin = (state) => {
  state.loginRequiredBy = null
}
