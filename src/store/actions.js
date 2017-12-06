import zorkoApi from '@/api/zorkoApi'
import authNavigator from '@/api/authNavigator'

export const gatherAccountInfo = ({commit, state, getters}) => {
  const ANONYM_ACCOUNT = {name: '', login: ''}

  if (!getters.doesAnyAccountInfoAvailable) {
    zorkoApi
      .fetchAccountInfo()
      .then((account) => {
        console.log('Account', account)
        commit('setAccount', account)
        commit('stopLoading')
      })
      .catch((error) => {
        console.error(error)
        commit('setAccount', Object.assign({}, ANONYM_ACCOUNT))
        commit('stopLoading')
      })
  } else {
    commit('stopLoading')
  }
}

export const setInitialData = ({commit, state, getters}) => {
  const xobj = new XMLHttpRequest()
  xobj.overrideMimeType('application/json')
  xobj.open('GET', './../../static/cars.json', false)
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      const data = JSON.parse(xobj.responseText)
      commit('setInitialData', data)
    }
  }
  xobj.send(null)
}

export const addRemoveFilterToStore = ({commit, state, getters}, filter) => {
  commit('addRemoveFilter', filter)
}

export const setAllFilters = ({commit}) => {
  commit('setFilters')
}

export const initializeData = (state) => {
  const xobj = new XMLHttpRequest()
  xobj.overrideMimeType('application/json')
  xobj.open('GET', './../../static/cars.json', false)
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      state.data = JSON.parse(xobj.responseText)
    }
  }
  xobj.send(null)
}

export const login = (commit, {provider}) => {
  authNavigator.login(provider)
}

export const saveExploreAsLook = ({dispatch, commit, getters}, look) => {
  const {isAuthenticated} = getters
  if (!isAuthenticated) {
    commit('loginRequiredByActon', 'saveExploreAsLook')
  } else {
    // do save
  }
}
