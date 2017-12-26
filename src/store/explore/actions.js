import datumService from '@/api/datumService'
import lookService from '@/api/lookService'

export const loadData = async ({commit}, {lookName}) => {
  const look = await lookService.getLookByName(lookName)

  if (look) {
    commit('initExploreByLook', look)
  } else {
    const data = await datumService.getData()
    commit('setInitialData', data)
    commit('setFields')
  }
}

export const save = ({commit, getters}) => {
  // it would be async action to save exploration as look
  const {isAuthenticated} = getters
  if (!isAuthenticated) {
    commit('loginRequiredByActon', 'save', {root: true})
  } else {
    // do async save here
  }
}
