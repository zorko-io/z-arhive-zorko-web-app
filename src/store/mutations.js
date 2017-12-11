import * as R from 'ramda'
import AppNavigation from '@/store/navigation/AppNavigation'

const equalByText = (text) => R.compose(R.equals(text), R.prop('text'))

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
  state.initialData = data
  state.data = data.map((item) => { return {} })
}

export const setFilteredData = (state, data) => {
  state.data = data
}

export const toggleFieldSelection = (state, {field}) => {
  const stateField = state.exploreFields.find(equalByText(field.text))
  stateField.selected = !field.selected
  const key = field.text
  if (field.selected) {
    state.initialData.forEach((record, index) => {
      state.data[index][key] = record[key]
    })
  } else {
    state.initialData.forEach((record, index) => {
      delete state.data[index][key]
    })
  }
}

export const toggleFilter = (state, {field}) => {
  const shouldRemoveFilter = field.filtered
  const stateField = state.exploreFields.find(equalByText(field.text))

  if (shouldRemoveFilter) {
    const filterIndex = state.exploreFilters.findIndex(equalByText(field.text))
    state.exploreFilters.splice(filterIndex, 1)
    stateField.filtered = false
  } else {
    state.exploreFilters.push({
      text: field.text,
      type: field.type,
      filtered: field.filtered,
      selected: field.selected
    })
    stateField.filtered = true
  }
}

export const setFilterCondition = (state, {filter, condition}) => {
  state.exploreFilters = state.exploreFilters.map(exploreFilter => {
    if (exploreFilter.text === filter.text) {
      exploreFilter.condition = condition
    }
    return exploreFilter
  })
}

export const setFilterValue = (state, {filter, value}) => {
  state.exploreFilters = state.exploreFilters.map(exploreFilter => {
    if (exploreFilter.text === filter.text) {
      exploreFilter.value = value
    }
    return exploreFilter
  })
}

export const setExploreFields = (state) => {
  let firstDataItem = state.initialData[0]
  let fields = []
  if (firstDataItem) {
    const firstDataItemKeys = Object.keys(firstDataItem)
    const isNumber = (key) => (typeof firstDataItem[key] === 'number')

    fields = firstDataItemKeys.map((key) => ({
      text: key,
      type: isNumber(key) ? 'measure' : 'dimention',
      selected: false,
      filtered: false
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
