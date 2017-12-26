import lookService from '../../api/lookService'

export const loadLook = async ({commit}, {name}) => {
  console.log('look action enter')
  const look = await lookService.getLookByName(name)

  commit('initLook', look)
}
