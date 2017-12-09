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
  state.data = data
}

export const toggleFieldSelection = (state, {field}) => {
  const stateField = state.exploreFields.find(equalByText(field.text))
  stateField.selected = !field.selected
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
      text: field.text
    })
    stateField.filtered = true
  }
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
