import {isNil} from 'ramda'

export const changeDrawerVisibility = ({commit}, {visibility}) => {
  if (!isNil(visibility)) {
    commit('setDrawerVisibility', visibility)
  } else {
    commit('toggleDrawerVisibility')
  }
}

export const changeFullscreenMode = ({commit}, {fullscreen}) => {
  if (fullscreen) {
    commit('setDrawerVisibility', false)
  }
  commit('setFullscreen', fullscreen)
}
