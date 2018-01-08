import * as actions from './actions'

describe('Navigation Actions', () => {
  let context
  let commit

  beforeEach(() => {
    commit = jest.fn()

    context = {
      commit
    }
  })

  it('set drawer visibility if visibility explicitly defined as true', () => {
    actions.changeDrawerVisibility(context, {
      visibility: true
    })

    expect(commit).toHaveBeenCalledWith('setDrawerVisibility', true)
    expect(commit).toHaveBeenCalledTimes(1)
  })

  it('set drawer visibility if visibility explicitly defined as false ', () => {
    actions.changeDrawerVisibility(context, {
      visibility: false
    })

    expect(commit).toHaveBeenCalledWith('setDrawerVisibility', false)
    expect(commit).toHaveBeenCalledTimes(1)
  })

  it('toggle drawer if visibility not defined ', () => {
    actions.changeDrawerVisibility(context, {})

    expect(commit).toHaveBeenCalledWith('toggleDrawerVisibility')
    expect(commit).toHaveBeenCalledTimes(1)
  })

  it('hides drawer if fullscreen mode', () => {
    actions.changeFullscreenMode(context, {fullscreen: true})

    expect(commit).toHaveBeenCalledWith('setDrawerVisibility', false)
    expect(commit).toHaveBeenCalledWith('setFullscreen', true)
  })

  it('set fullscreen if it`s not a truthy', () => {
    actions.changeFullscreenMode(context, {fullscreen: false})

    expect(commit).toHaveBeenCalledWith('setFullscreen', false)
    expect(commit).toHaveBeenCalledTimes(1)
  })

  it('activates toolbar buttons', () => {
    const payload = {buttons: ['bar', 'baz']}

    actions.activateToolbarButtons(context, payload)

    expect(commit).toHaveBeenCalledWith('setActiveButtons', payload.buttons)
  })
})
