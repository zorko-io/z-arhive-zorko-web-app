import AppNavigation from '@/store/navigation/AppNavigation'
import workspaceInput from './__data__/workspace.input.json'
import workspaceNavigationOutput from './__data__/workspaceNavigation.output.json'

describe('AppNavigation', () => {
  it('can assembleNavigationItems', () => {
    let result = AppNavigation.assembleNavigationItems(
      [{name: 'library'}, {name: 'explore'}, {name: 'model'}, {name: 'admin'}, {name: 'account'}],
      workspaceInput
    )

    expect(result).toEqual(workspaceNavigationOutput)
  })
})
