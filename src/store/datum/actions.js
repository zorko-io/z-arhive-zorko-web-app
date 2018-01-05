import datumService from '../../api/datumService'

export const loadDatum = async ({commit}, {name}) => {
  const datum = await datumService.getDatumByName(name)

  commit('setDatum', datum)
}
