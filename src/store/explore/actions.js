import datumService from '@/api/datumService'
import lookService from '@/api/lookService'

export const loadData = async ({commit}, {name}) => {
  const look = await lookService.getLookByName(name)
  if (look) {
    commit('initExploreByLook', look)
  } else {
    let data

    if (name) {
      data = await datumService.getDataByDatumName(name)
    } else {
      data = await datumService.getData()
    }

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
