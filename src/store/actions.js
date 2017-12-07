import zorkoApi from '@/api/zorkoApi'
import authNavigator from '@/api/authNavigator'
import datumService from '@/api/datumService'

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
  commit('setAggregators')
}

export const addRemoveAggregatorToStore = ({commit, state, getters}, aggregator) => {
  commit('addRemoveAggregator', aggregator)
}

export const setAllAggregators = ({commit}) => {
  commit('setAggregators')
}

export const initializeData = (state) => {
  const xobj = new XMLHttpRequest()
  xobj.overrideMimeType('application/json')
  xobj.open('GET', './../../static/cars.json', false)
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      state.data = JSON.parse(xobj.responseText)
    }
  }
  xobj.send(null)
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
