import lookService from '@/api/lookService'
import datumService from '@/api/datumService'

export const loadLooks = async ({commit}) => {
  const looks = await lookService.getLooks()

  commit('addLooks', looks)
}

export const loadDatums = async ({commit}) => {
  const looks = await datumService.getDatums()

  commit('addDatums', looks)
}
