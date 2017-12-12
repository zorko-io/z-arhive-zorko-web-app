import zorkoApi from '@/api/zorkoApi'
import authNavigator from '@/api/authNavigator'
import datumService from '@/api/datumService'
import { FILTER_VALUES } from './../constants'

export const gatherAccountInfo = async ({commit, state, getters}) => {
  const ANONYM_ACCOUNT = {name: '', login: ''}

  if (!getters.doesAnyAccountInfoAvailable) {
    try {
      const account = await zorkoApi.fetchAccountInfo()
      commit('setAccount', account)
    } catch (err) {
      commit('setAccount', Object.assign({}, ANONYM_ACCOUNT))
    }
  }
  commit('stopLoading')
}

export const setInitialData = async ({commit, state, getters}) => {
  const data = await datumService.getData()
  commit('setInitialData', data)
  commit('setExploreFields')
}

export const login = (commit, {provider}) => {
  authNavigator.login(provider)
}

export const saveExploreAsLook = ({dispatch, commit, getters}, look) => {
  const {isAuthenticated} = getters
  if (!isAuthenticated) {
    commit('loginRequiredByActon', 'saveExploreAsLook')
  } else {
    // do save
  }
}

export const applyExploreFilters = ({state, commit, getters}) => {
  let data = state.data

  state.exploreFilters.forEach(filter => {
    data = data.filter(item => {
      switch (filter.condition) {
        case FILTER_VALUES.EQUAL_TO:
          return filter.value ? item[filter.text] === filter.value : true
        case FILTER_VALUES.NOT_EQUAL_TO:
          return filter.value ? item[filter.text] !== filter.value : true
        case FILTER_VALUES.MORE_THAN:
          return filter.value ? item[filter.text] > filter.value : true
        case FILTER_VALUES.LESS_THAN:
          return filter.value ? item[filter.text] < filter.value : true
        default:
          return true
      }
    })
  })
  commit('setFilteredData', data)
}
