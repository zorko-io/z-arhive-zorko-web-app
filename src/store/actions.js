import zorkoApi from '@/api/zorkoApi'
import authNavigator from '@/api/authNavigator'

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

export const login = (commit, {provider}) => {
  authNavigator.login(provider)
}
