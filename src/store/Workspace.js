import prop from 'lodash/fp/prop'
import find from 'lodash/fp/find'
import flow from 'lodash/fp/flow'

function getCurrentScope (workspace) {
  const getCurrentScopeId = prop('scopeId')
  const getScopeId = prop('id')
  const getScopes = prop('scopes')
  const findCurrentScope = find((scope) => getScopeId(scope) === getCurrentScopeId(workspace))

  return flow(getScopes, findCurrentScope)(workspace)
}

export default {
  getCurrentScope
}

