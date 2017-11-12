import AppNavigation from '@/store/AppNavigation'
import workspaceInput from './__data__/workspace.input.json'
import exploreNavigationInput from './__data__/exploreNavigation.input.json'
import exploreNavigationOutput from './__data__/exploreNavigation.output.json'
import modelNavigationInput from './__data__/modelNavigation.input.json'
import modelNavigationOutput from './__data__/modelNavigation.output.json'
import workspaceNavigationOutput from './__data__/workspaceNavigation.output.json'

describe('AppNavigation', () => {
  it('buildNavigationFromWorkspace', () => {
    let result = AppNavigation.buildNavigationFromWorkspace(workspaceInput)

    expect(result).toEqual(workspaceNavigationOutput)
  })

  it('buildNavigationFromExplores', () => {
    let result = AppNavigation.getExploreItems(exploreNavigationInput)

    expect(result).toEqual(exploreNavigationOutput)
  })

  it('buildNavigationFromModel', () => {
    let buildNavigation = AppNavigation.buildNavigationFromModel(modelNavigationInput)

    expect(buildNavigation).toEqual(modelNavigationOutput)
  })
})
