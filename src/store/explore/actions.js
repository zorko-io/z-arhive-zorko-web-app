import datumService from '@/api/datumService'

export const loadData = async ({commit}) => {
  const data = await datumService.getData()
  commit('setInitialData', data)
  commit('setFields')
}

export const save = ({commit, getters}) => {
  // it would be async action to save exploration as look
  const {isAuthenticated} = getters
  if (!isAuthenticated) {
    commit('loginRequiredByActon', 'save')
  } else {
    // do async save  here
  }
}
