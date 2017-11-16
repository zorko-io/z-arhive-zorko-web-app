import * as R from 'ramda'

export const getCurrentScope = (workspace) => {
  const currentScopeId = R.prop('scopeId', workspace)
  const isCurrentScope = R.compose(
    R.equals(currentScopeId),
    R.prop('id')
  )
  const findCurrentScope = R.find(isCurrentScope)
  const availableScopes = R.prop('scopes', workspace)

  return findCurrentScope(availableScopes)
}
