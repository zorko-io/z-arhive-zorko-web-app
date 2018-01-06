jest.mock('../../api/datumService')
jest.mock('../../api/lookService')

import * as actions from './actions'

describe('Datum Actions', () => {
  let context

  beforeEach(() => {
    context = {
      commit: jest.fn()
    }
  })

  it('loads datum with looks', async () => {
    expect.assertions(2)

    await actions.loadDatum(context, {name: 'used'})

    expect(context.commit).toHaveBeenCalledWith('setLooks', [{name: 'baz'}, {name: 'bar'}])
    expect(context.commit).toHaveBeenCalledWith('setDatum', {
      name: 'used',
      looks: ['baz', 'bar']
    })
  })

  it('loads datum without looks', async () => {
    expect.assertions(2)

    await actions.loadDatum(context, {name: 'notUsed'})

    expect(context.commit).toHaveBeenCalledWith('setDatum', {
      name: 'notUsed',
      looks: []
    })
    expect(context.commit).toHaveBeenCalledTimes(1)
  })
})
