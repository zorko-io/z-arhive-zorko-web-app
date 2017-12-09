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
