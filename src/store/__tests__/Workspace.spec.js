import Workspace from '@/store/Workspace'

describe('Workspace', () => {
  it('getCurrentScope', () => {
    let result = Workspace.getCurrentScope({scopeId: 123, scopes: [{id: 1}, {id: 2}, {id: 123}]})

    expect(result).toEqual({id: 123})
  })
})
