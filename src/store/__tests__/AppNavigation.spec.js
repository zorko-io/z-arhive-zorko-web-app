import AppNavigation from '@/store/AppNavigation'
import workspaceInput from './__data__/workspace.input.json'
import exploreNavigationInput from './__data__/exploreNavigation.input.json'
import exploreNavigationOutput from './__data__/exploreNavigation.output.json'
import workspaceNavigationOutput from './__data__/workspaceNavigation.output.json'

describe('AppNavigation', () => {
  xit('buildNavigationFromWorkspace', () => {
    let result = AppNavigation.buildNavigationFromWorkspace(workspaceInput)

    expect(result).toEqual(workspaceNavigationOutput)
  })

  it('buildNavigationFromExplores', () => {
    let buildNavigation = AppNavigation.buildNavigationFromExplore()

    expect(buildNavigation(exploreNavigationInput)).toEqual(exploreNavigationOutput)
  })
})
