import { isEmpty } from 'lodash'

export const doesAnyAccountInfoAvailable = (state) => {
  return !isEmpty(state.account)
}

export const isAnonymAccount = (state) => {
  return state.account.name === '' && state.account.login === ''
}

export const isAuthenticated = (state) => {
  return state.account && state.account.name && state.account.login
}
