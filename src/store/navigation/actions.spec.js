import * as actions from './actions'

describe('Navigation Actions', () => {
  let context

  beforeEach(() => {
    context = {
      commit: jest.fn()
    }
  })

  it('set drawer visibility if visibility explicitly defined as true', () => {
    actions.changeDrawerVisibility(context, {
      visibility: true
    })

    expect(context.commit).toHaveBeenCalledWith('setDrawerVisibility', true)
    expect(context.commit).toHaveBeenCalledTimes(1)
  })

  it('set drawer visibility if visibility explicitly defined as false ', () => {
    actions.changeDrawerVisibility(context, {
      visibility: false
    })

    expect(context.commit).toHaveBeenCalledWith('setDrawerVisibility', false)
    expect(context.commit).toHaveBeenCalledTimes(1)
  })

  it('toggle drawer if visibility not defined ', () => {
    actions.changeDrawerVisibility(context, {})

    expect(context.commit).toHaveBeenCalledWith('toggleDrawerVisibility')
    expect(context.commit).toHaveBeenCalledTimes(1)
  })

  it('hides drawer if fullscreen mode', () => {
    actions.changeFullscreenMode(context, {fullscreen: true})

    expect(context.commit).toHaveBeenCalledWith('setDrawerVisibility', false)
    expect(context.commit).toHaveBeenCalledWith('setFullscreen', true)
  })

  it('set fullscreen if it`s not a truthy', () => {
    actions.changeFullscreenMode(context, {fullscreen: false})

    expect(context.commit).toHaveBeenCalledWith('setFullscreen', false)
    expect(context.commit).toHaveBeenCalledTimes(1)
  })
})
