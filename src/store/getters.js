import * as R from 'ramda'

export const doesAnyAccountInfoAvailable = R.pipe(
  R.prop('account'),
  R.empty,
  R.not
)

export const isAnonymAccount = (state) => {
  return state.account.name === '' && state.account.login === ''
}

export const isAuthenticated = (state) => {
  return state.account && state.account.name && state.account.login
}

export const shouldShowLoginDialog = (state) => {
  return Boolean(state.loginRequiredBy)
}
