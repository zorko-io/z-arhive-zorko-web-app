import lookService from '@/api/lookService'

export const loadLooks = async ({commit}) => {
  const looks = await lookService.getLooks()

  commit('addLooks', looks)
}
