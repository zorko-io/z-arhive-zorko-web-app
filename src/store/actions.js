import zorkoApi from '@/api/zorkoApi'
import authNavigator from '@/api/authNavigator'
import datumService from '@/api/datumService'

export const gatherAccountInfo = ({commit, state, getters}) => {
  const ANONYM_ACCOUNT = {name: '', login: ''}

  if (!getters.doesAnyAccountInfoAvailable) {
    zorkoApi
      .fetchAccountInfo()
      .then((account) => {
        console.log('Account', account)
        commit('setAccount', account)
        commit('stopLoading')
      })
      .catch((error) => {
        console.error(error)
        commit('setAccount', Object.assign({}, ANONYM_ACCOUNT))
        commit('stopLoading')
      })
  } else {
    commit('stopLoading')
  }
}

export const setInitialData = async ({commit, state, getters}) => {
  const data = await datumService.getData()
  commit('setInitialData', data)
  commit('setFilters')
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
