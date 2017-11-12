import buildWorkspaceNavigationMenus from '@/store/buildWorkspaceNavigationMenus'
import workspaceInput from './__data__/workspace.input.json'
import workspaceNavigationOutput from './__data__/workspaceNavigation.output.json'

describe('buildWorkspaceNavigationMenus', () => {
  it('displays default message', () => {
    let result = buildWorkspaceNavigationMenus(workspaceInput)

    expect(result).toEqual(workspaceNavigationOutput)
  })
})
