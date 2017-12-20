import zorkoApi from '@/api/zorkoApi'
import authNavigator from '@/api/authNavigator'

export const bootstrapAppInitialState = async (context) => {
  const {commit, dispatch} = context

  await dispatch('loadAccountInfo')
  await dispatch('library/loadLooks')

  commit('stopLoading')
}

export const loadAccountInfo = async ({commit, getters}) => {
  const ANONYM_ACCOUNT = {name: '', login: ''}

  if (!getters.doesAnyAccountInfoAvailable) {
    try {
      const account = await zorkoApi.fetchAccountInfo()
      commit('setAccount', account)
    } catch (err) {
      commit('setAccount', Object.assign({}, ANONYM_ACCOUNT))
    }
  }
}

export const login = (commit, {provider}) => {
  authNavigator.login(provider)
}

