import * as R from 'ramda'
import * as workspace from '@/store/util/workspace'

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

export const currentScope = R.pipe(
  R.prop('workspace'),
  workspace.getCurrentScope,
)

export const getInitialDta = (state) => {
  return state.data
}

export const exploreDimentions = (state) => {
  return state.exploreFields.filter((field) => (field.type === 'dimention'))
}

export const exploreMeasures = (state) => {
  return state.exploreFields.filter((field) => (field.type === 'measure'))
}

export const exploreSelectedFields = (state) => {
  return state.exploreFields.filter((field) => (field.selected))
}

