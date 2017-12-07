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

export const addRemoveFilter = (state, filter) => {
  let filters = []
  let stateHasFilter = false
  state.selectedFilters.forEach(selectedFilter => {
    if (selectedFilter.text !== filter.text) {
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

export const setFilters = (state) => {
  const dimentions = []
  const mesures = []
  const data = state.data

  if (data.length > 0) {
    Object.keys(state.data[0]).forEach(key => {
      if (typeof state.data[0][key] === 'number') {
        mesures.push({text: key})
      } else {
        dimentions.push({text: key})
      }
    })
    state.filters = {
      dimentions: dimentions,
      mesures: mesures
    }
  }
}

export const loginRequiredByActon = (state, actionName) => {
  state.loginRequiredBy = actionName
}

export const rejectLogin = (state) => {
  state.loginRequiredBy = null
}
