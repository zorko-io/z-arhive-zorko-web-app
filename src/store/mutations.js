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

export const addRemoveAggregator = (state, aggregator) => {
  let aggregators = []
  let stateHasAggregator = false
  state.selectedAggregators.forEach(selectedAggregator => {
    if (selectedAggregator.text !== aggregator.text) {
      aggregators.push(selectedAggregator)
    } else {
      stateHasAggregator = true
    }
  })
  if (!stateHasAggregator) {
    aggregators.push(aggregator)
  }
  state.selectedAggregators = aggregators
}

export const setAggregators = (state) => {
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
    state.aggregators = {
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
