import FullscreenNavigationGuard from './FullscreenNavigationGuard'

describe('Fullscreen navigation guard', () => {
  let fullscreenNavigation
  let store
  let to
  let from
  let next

  beforeEach(() => {
    store = {
      dispatch: jest.fn()
    }

    to = jest.fn()
    from = jest.fn()
    next = jest.fn()

    fullscreenNavigation = FullscreenNavigationGuard(store)
  })

  it('call next if no meta available', () => {
    fullscreenNavigation(to, from, next)

    expect(next).toHaveBeenCalled()
  })

  it('call next if  meta available', () => {
    to.meta = {fullscreen: true}

    fullscreenNavigation(to, from, next)

    expect(next).toHaveBeenCalled()
  })

  it('turns on navigation in fullscreen mode', () => {
    to.meta = {fullscreen: true}

    fullscreenNavigation(to, from, next)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'navigation/changeFullscreenMode',
      fullscreen: true
    })
  })

  it('turns off navigation from fullscreen mode', () => {
    to.meta = {}

    fullscreenNavigation(to, from, next)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'navigation/changeFullscreenMode',
      fullscreen: false
    })
  })
})
