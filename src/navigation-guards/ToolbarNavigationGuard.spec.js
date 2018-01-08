import ToolbarNavigationGuard from './ToolbarNavigationGuard'

describe('Toolbar navigation guard', () => {
  let toolbarNavigationGuard
  let store
  let to
  let from
  let next
  let defaultPayload

  beforeEach(() => {
    store = {
      dispatch: jest.fn()
    }

    to = {}
    from = jest.fn()
    next = jest.fn()

    defaultPayload = {
      type: 'navigation/activateToolbarButtons',
      buttons: ['create']
    }

    toolbarNavigationGuard = ToolbarNavigationGuard(store)
  })

  it('calls next if no name provided', () => {
    toolbarNavigationGuard(to, from, next)

    expect(next).toHaveBeenCalled()
  })

  it('put default controls on toolbar', () => {
    to.name = 'bazz'

    toolbarNavigationGuard(to, from, next)

    expect(store.dispatch).toHaveBeenCalledWith(defaultPayload)

    expect(next).toHaveBeenCalled()
  })

  it('put controls related to `look` on a toolbar', () => {
    to.name = 'look'

    toolbarNavigationGuard(to, from, next)

    expect(store.dispatch).toHaveBeenCalledWith({
      ...defaultPayload,
      buttons: ['explore', 'create']
    })

    expect(next).toHaveBeenCalled()
  })

  it('put controls related to `explore` on a toolbar', () => {
    to.name = 'explore'

    toolbarNavigationGuard(to, from, next)

    expect(store.dispatch).toHaveBeenCalledWith({
      ...defaultPayload,
      buttons: ['save', 'create']
    })

    expect(next).toHaveBeenCalled()
  })

  it('put controls related to `datum` on a toolbar', () => {
    to.name = 'datum'

    toolbarNavigationGuard(to, from, next)

    expect(store.dispatch).toHaveBeenCalledWith({
      ...defaultPayload,
      buttons: ['explore', 'create']
    })

    expect(next).toHaveBeenCalled()
  })
})
