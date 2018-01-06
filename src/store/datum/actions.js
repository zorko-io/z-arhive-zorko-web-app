import datumService from '../../api/datumService'
import lookService from '../../api/lookService'

export const loadDatum = async ({commit}, {name}) => {
  const datum = await datumService.getDatumByName(name)
  const lookNamesInUse = datum.looks

  if (lookNamesInUse.length > 0) {
    const looks = await lookService.search({names: lookNamesInUse})

    if (looks) {
      commit('setLooks', looks)
    }
  }

  commit('setDatum', datum)
}
